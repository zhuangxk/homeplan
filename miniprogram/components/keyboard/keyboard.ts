import { getAccounts, getBillTypes, getOssToken, createBill } from '../../api/index'
import { formatMonthDate } from '../../utils/util'

Component({
  options: {
    styleIsolation: 'shared'
  },
  lifetimes: {
    ready(): void{
      this.getTypes()  
      this.getAccounts()
    }
  },
  properties: {
      ledgerId: Number
  },
  observers: {
    ledgerId(): void {
      this.getTypes()  
      this.getAccounts()
    }
  },
  data: {
    types: {
      1: [] as AnyArray,
      2: [] as AnyArray,
    } as Record<number, AnyArray>,
    accounts:[] as AnyArray,
    typeActive: 1,
    formdata: {
      "amount": "",
      "amount_type": 1,
      "bill_type_id": null,
      "bill_time": new Date().toISOString(),
      "comment": "",
      "account_id": null as null | number
    },
    minDate: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 30).getTime(),
    maxDate: new Date().getTime(),
    now: new Date().getTime(),
    max: 9999999,
    min: 0,
    billTime: '今日',
    accountName: '现金',
    imgPopupShow: false,
    accountPopupShow: false,
    datePopupShow: false,
    typing: false,
    MainCur: 0,
    fileList: [] as AnyArray
  },
  methods: {
    async getTypes(): Promise<void>{
      if (!this.properties.ledgerId){
        return
      }
      const billTypes = await getBillTypes(this.properties.ledgerId)
      const types = {} as Record<number, AnyArray>
      billTypes.forEach(item => {
        types[item.type] = types[item.type] || []
        types[item.type].push(item)
      })
      this.setData({
        types,
        formdata:{
          ...this.data.formdata,
          "bill_type_id": types[1][0]['id']
        }
      })
    },
    async getAccounts(): Promise<void>{
      if (!this.properties.ledgerId){
        return
      }
      const accounts = await getAccounts(this.properties.ledgerId)
      this.setData({
        accounts
      })
      this.setAccount(accounts[0].id)
    },
    onInput(e: AnyObject): void{
      const value = e.currentTarget.dataset.v;
      if(!value) return
      switch (value) {
        case 'date':
          this.date()
          return
        case 'account':
          this.account()
          return
        case 'ok':
          this.ok()
          return
        case 'del':
          this.del()
          wx.vibrateShort()
          return;
        default:
          this.input(value)
          wx.vibrateShort()
          return;
      }
    },
    // 删除键
    del(): void{
      const value = this.data.formdata.amount.substring(0, this.data.formdata.amount.length - 1)
      this.setData({
        formdata: {
          ...this.data.formdata,
          amount: value
        }
      })
    },
    date(): void{
      this.setData({
        datePopupShow: true
      })
    },
    // 提交账单
    ok(): void{
      if(this.data.formdata.amount == ""){
        wx.showToast({
          title: '请填写金额',
          duration: 2000  
        })
        return
      }
      const pic = {} as AnyObject
      const {fileList} = this.data
      fileList[0] && (pic["pic_id1"] = fileList[0]['id'])
      fileList[1] && (pic["pic_id2"] = fileList[1]['id'])
      createBill(this.data.ledgerId,{
        ...this.data.formdata,
        ...pic
      }).then(_=>{
        wx.showToast({
          title: "保存成功",
          icon: 'success',
          duration: 2000  
        })
        this.triggerEvent("success")
      })
    },
    account(): void{
      this.setData({
        accountPopupShow: true
      })
    },
    // 键盘输入
    input(val: string): void{
      const value = this.format(val)
      this.setData({
        formdata: {
          ...this.data.formdata,
          amount: value
        }
      })
    },
    // 键盘数字控制
    format: function (val: string): string {
      if (this.data.formdata.amount.indexOf('.') > -1) {
        if (val === '.'){
          return this.data.formdata.amount
        }
        if (this.data.formdata.amount.split('.')[1].length >= 2){
          return this.data.formdata.amount
        }
      }
      const value = this.data.formdata.amount + val
      if (val === '.') {
        return this.data.formdata.amount + val
      }
      if (this.data.formdata.amount === '0'){
        if(val !== '.' ){
          return val
        }
      }
      if(parseInt(value) > 99999999){
        wx.showToast({
          title: '钱太多,数不过来啦',
          icon: 'none'
        })
        return this.data.formdata.amount
      }

      return value

    },
    onRemarkFocus(): void {
      this.setData({
        typing: true
      })
    },
    onRemarkBlur(e: AnyObject): void {
      const value = e.detail.value
      this.setData({
        typing: false,
        formdata: {
          ...this.data.formdata,
          comment: value
        }
      })
    },
    onBillTypeTap(e: AnyObject): void {
      const billTypeId = e.currentTarget.dataset.id;
      if(!billTypeId) return
      this.setData({
        typing: false,
        formdata: {
          ...this.data.formdata,
          "bill_type_id": billTypeId
        }
      })
      wx.vibrateShort()
    },
    onImgBtnTap(): void{
      this.setData({
        imgPopupShow: true
      })
    },
    onImgPopupClose(): void{
      this.setData({
        imgPopupShow: false
      })
    },
    onAccountPopupClose(): void{
      this.setData({
        accountPopupShow: false
      })
    },
    onDatePopupClose(): void{
      this.setData({
        datePopupShow: false
      })
    },
    // 上传图片
    afterRead(event): void{
      const self = this; // eslint-disable-line
      const { file } = event.detail;
      getOssToken().then(res => {
        wx.uploadFile({
          url: res.host,
          filePath: file.path,
          name: 'file',
          formData: {
            'name': new Date().getTime(),
            'key' : res.dir + "${filename}",
            'policy': res.policy,
            'OSSAccessKeyId': res.accessid, 
            'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
            'callback' : res.callback,
            'signature': res.signature

          },
          success(res) {
            console.log(res)
            if(res.statusCode == 200){
              const data = JSON.parse(res.data)
              const url = data.data.url
              const id = data.data.id
              const { fileList = [] } = self.data;
              fileList.push({ ...file, url, id });
              self.setData({ fileList });
            } else {
              wx.showToast({
                title: '上传失败，请再稍后再试',
                icon: 'none',
                duration: 2000
              })
            }
          },
        });
      })
    },
    // 删除图片
    deletePic(e): void{
      const { index } = e.detail
      const { fileList = [] } = this.data;
      fileList.splice(index,1)
      this.setData({ fileList })
    },
    onConfirm(e): void{
      const value = e.detail as Date

      this.setData({
        formdata: {
          ...this.data.formdata,
          "bill_time": value.toISOString()
        },
        billTime: formatMonthDate(value),
        datePopupShow: false
      })
    },
    onTabChange(e: AnyObject): void{
      const typeActive = e.detail.name;
      this.setData({
        typeActive : e.detail.name,
        formdata: {
          ...this.data.formdata,
          "amount_type": typeActive,
          "bill_type_id": this.data.types[typeActive][0]['id']
        }
      })
    },
    onAccountChange(e: AnyObject): void{
      this.setAccount(e.detail)
    }, 
    onAccountClick(e: AnyObject): void{
      const { name } = e.currentTarget.dataset;
      this.setAccount(name)
    },
    setAccount(accountId: number): void{
      const {name} = this.data.accounts.find(item=>item.id == accountId)
      this.setData({
        formdata: {
          ...this.data.formdata,
          "account_id": accountId
        },
        accountName: name,
        accountPopupShow: false,
      })
    }
  }
})