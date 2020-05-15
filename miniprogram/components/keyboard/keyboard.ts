// import { getBillTypes } from '../../api/index'
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  lifetimes: {
    // attached(): void{
    //   getBillTypes().then(res=>{
    //     console.log(res)
    //   })
    // }
  },
  properties: {
      billTypes: Array
  },
  observers: {
      "billTypes"(val: AnyArray): void {
        const types = {} as Record<number, AnyArray>
        val.forEach(item=>{
          types[item.type] = types[item.type] || []
          types[item.type].push(item)
        })
        this.setData({
          types
        })

      }
  },
  data: {
    types: {
      1: [] as AnyArray,
      2: [] as AnyArray,
      3: [] as AnyArray
    } as Record<number, AnyArray>,
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
    remark: '',
    acount: '',
    date: '',
    imgPopupShow: false,
    acountPopupShow: false,
    datePopupShow: false,
    typing: false,
    MainCur: 0,
    form: {
      billTypeId: null
    },
    fileList: []
  },
  methods: {
    onInput(e: any): void{
      const value = e.currentTarget.dataset.v;
      if(!value) return
      switch (value) {
        case 'date':
          this.date()
          return
        case 'acount':
          this.acount()
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
      const value = this.data.acount.substring(0, this.data.acount.length - 1)
      this.setData({
        acount: value
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
    acount(): void{
      this.setData({
        acountPopupShow: true
      })
    },
    input(val: string): void{
      const value = this.format(val)
      this.setData({
        acount: value
      })
    },
    format: function (val: any) {
      if (this.data.acount.indexOf('.') > -1) {
        if (val === '.'){
          return this.data.acount
        }
        if(this.data.acount.split('.')[1].length >= 2){
          return this.data.acount
        }
      }
      const value = this.data.acount + val
      if (val === '.') {
        return this.data.acount + val
      }
      if (this.data.acount === '0'){
        if(val !== '.' ){
          return val
        }
      }
      if(parseInt(value) > 99999999){
        wx.showToast({
          title: '钱太多,数不过来啦',
          icon: 'none'
        })
        return this.data.acount
      }

      return value

    },
    onRemarkFocus(): void {
      this.setData({
        typing: true
      })
    },
    onRemarkBlur(e: any): void {
      const value = e.detail.value
      this.setData({
        typing: false,
        remark: value
      })
    },
    onBillTypeTap(e: any): void {
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
    onAcountPopupClose(): void{
      this.setData({
        acountPopupShow: false
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
    onTabChange(e: any): void{
      console.log(e.detail.name)
      this.setData({
        typeActive : e.detail.name
      })
    }
  }
})