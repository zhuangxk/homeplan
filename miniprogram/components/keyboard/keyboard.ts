
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  data: {
    max: 9999999,
    min: 0,
    remark: '',
    acount: '',
    date: '',
    typing: false,
    MainCur: 0,
    billTypes: [{ id: 0, name: '购物', icon: 'close' }, 
    { id: 1, name: '购物', icon: 'close' }, 
    { id: 2, name: '购物', icon: 'close' }, 
    { id: 3, name: '购物', icon: 'close' }, 
    { id: 4, name: '购物', icon: 'close' }, 
    { id: 5, name: '购物', icon: 'close' },
    { id: 6, name: '购物', icon: 'close' }, 
    { id: 7, name: '购物', icon: 'close' }, 
    { id: 8, name: '购物', icon: 'close' }, 
    { id: 9, name: '购物', icon: 'close' }, 
    { id: 10, name: '购物', icon: 'close' }, 
    { id: 11, name: '购物', icon: 'close' },
    { id: 12, name: '购物', icon: 'close' },
    { id: 13, name: '购物', icon: 'close' },
    { id: 14, name: '购物', icon: 'close' }, 
    { id: 15, name: '购物', icon: 'close' }],
  },
  methods: {
    onInput(e: any){
      const value = e.currentTarget.dataset.v;
      console.log('----', e)
      if(!value) return
      switch (value) {
        case 'date':
          this.setDate()
          return
        case 'ok':
          this.ok()
          return

        case 'del':
          this.del()
          return;
          
        default:
          this.input(value)
          return;
      }
    },
    del(): void{
      const value = this.data.acount.substring(0, this.data.acount.length - 1)
      console.log('del',value)
      this.setData({
        acount: value
      })
    },
    setDate(): void{
      ;
    },
    ok(): void{
      ;
    },
    input(val: string): void{
      console.log('input')
      const value = this.format(val)
      this.setData({
        acount: value
      })
    },
    // filter illegal characters
    filter: function (value: string): string {
      value = value.replace(/[^0-9.-]/g, '');
      if (this.data.integer && value.indexOf('.') !== -1) {
        value = value.split('.')[0];
      }
      return value;
    },
    // limit value range
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
    getNum(val: string): number{
      const n = parseFloat(val)
      return n
    },
    checkNum(val: string): boolean {
      const n = this.getNum(val)
      console.log(n)
      if(n>1000000){
        wx.showToast({
          title: '数值太大',
          icon: 'none',
          duration: 2000
        })
        return false
      }
      return true
    },
    onRemarkFocus(e: any): void {
      console.log(e)
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
    }
  }
})