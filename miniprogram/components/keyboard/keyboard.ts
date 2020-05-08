
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  data: {
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
      const value = e.target.dataset.v;
      switch (value) {
        case 'ok':
          this.ok()
          return

        case 'del':
          this.del()
          return;
          
        default:
          this.input()
          return;
      }
      console.log(e)
    },
    del(): void{
      ;
    },
    ok(): void{
      ;
    },
    input(): void{
      ;
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