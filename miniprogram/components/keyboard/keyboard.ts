
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  data: {
    remark: '',
    date: '',
    typing: false
  },
  methods: {
    // onRemarkTap(): void {
    //   this.setData({
    //     typing: true
    //   })
    // },
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