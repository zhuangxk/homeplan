
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  data: {
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
    fileList: [],
    billTypes: [{ id: 0, name: '购物', icon: 'close' }, 
    { id: 1, name: '购物1', icon: 'close' }, 
    { id: 2, name: '购物2', icon: 'close' }, 
    { id: 3, name: '购物3', icon: 'close' }, 
    { id: 4, name: '购物4', icon: 'close' }, 
    { id: 5, name: '购物5', icon: 'close' },
    { id: 6, name: '购物6', icon: 'close' }, 
    { id: 7, name: '购物7', icon: 'close' }, 
    { id: 8, name: '购物8', icon: 'close' }, 
    { id: 9, name: '购物9', icon: 'close' }, 
    { id: 10, name: '购物10', icon: 'close' }, 
    { id: 11, name: '购物11', icon: 'close' },
    { id: 12, name: '购物12', icon: 'close' },
    { id: 13, name: '购物13', icon: 'close' },
    { id: 14, name: '购物14', icon: 'close' }, 
    { id: 15, name: '购物15', icon: 'close' }],
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
    afterRead(){

    },
    onConfirm(){
      this.setData({
        datePopupShow: false
      })
    }
  }
})