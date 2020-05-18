import { getBillTypes, getAccounts } from '../../api/index'
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
      "amount": 1313.3,
      "bill_type_id": 1,
      "bill_time": "2020-04-19T16:22:35.591Z",
      "ledger_id": 1,
      "comment": ""
    },
    minDate: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 30).getTime(),
    maxDate: new Date().getTime(),
    max: 9999999,
    min: 0,
    date: '',
    imgPopupShow: false,
    amountPopupShow: false,
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
          "ledger_id": types[1][0]['id']
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
    },
    onInput(e: AnyObject): void{
      const value = e.currentTarget.dataset.v;
      if(!value) return
      switch (value) {
        case 'date':
          this.date()
          return
        case 'amount':
          this.amount()
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
      const value = this.data.form.amount.substring(0, this.data.form.amount.length - 1)
      this.setData({
        form: {
          ...this.data.form,
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
    amount(): void{
      this.setData({
        amountPopupShow: true
      })
    },
    input(val: string): void{
      const value = this.format(val)
      this.setData({
        form: {
          ...this.data.form,
          amount: value
        }
      })
    },
    format: function (val: string): string {
      if (this.data.form.amount.indexOf('.') > -1) {
        if (val === '.'){
          return this.data.form.amount
        }
        if(this.data.form.amount.split('.')[1].length >= 2){
          return this.data.form.amount
        }
      }
      const value = this.data.form.amount + val
      if (val === '.') {
        return this.data.form.amount + val
      }
      if (this.data.form.amount === '0'){
        if(val !== '.' ){
          return val
        }
      }
      if(parseInt(value) > 99999999){
        wx.showToast({
          title: '钱太多,数不过来啦',
          icon: 'none'
        })
        return this.data.form.amount
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
        form: {
          ...this.data.form,
          remark: value
        }
      })
    },
    onBillTypeTap(e: AnyObject): void {
      const billTypeId = e.currentTarget.dataset.id;
      if(!billTypeId) return
      this.setData({
        typing: false,
        form: {
          ...this.data.form,
          billTypeId
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
    onamountPopupClose(): void{
      this.setData({
        amountPopupShow: false
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
    onConfirm(): void{
      this.setData({
        datePopupShow: false
      })
    },
    onTabChange(e: AnyObject): void{
      const typeActive = e.detail.name;
      this.setData({
        typeActive : e.detail.name,
        form: {
          ...this.data.form,
          billTypeId: this.data.types[typeActive][0]['id']
        }
      })
    }
  }
})