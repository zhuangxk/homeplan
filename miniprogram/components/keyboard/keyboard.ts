import { getAccounts, getBillTypes } from '../../api/index'
import { formatMonthDate } from '../../utils/util'
Component({
  options: {
    styleIsolation: 'apply-shared'
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
      3: [] as AnyArray
    } as Record<number, AnyArray>,
    accounts:[] as AnyArray,
    typeActive: 1,
    formdata: {
      "amount": "",
      "bill_type_id": null,
      "bill_time": new Date().toISOString(),
      "comment": "",
      "account_id": null as null | number,
      "account_in_id": null as null | number,
      "account_out_id": null as null | number, 
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
    fileList: []
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
    ok(): void{
      ;
    },
    account(): void{
      this.setData({
        accountPopupShow: true
      })
    },
    input(val: string): void{
      const value = this.format(val)
      this.setData({
        formdata: {
          ...this.data.formdata,
          amount: value
        }
      })
    },
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
    afterRead(): void{
      ;
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