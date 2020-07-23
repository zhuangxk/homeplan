import { getAccounts, addAccount } from "../../../api/index"
interface form {
  [key: string]: string | number
}
Page({
  data: {
    ledgerID: 1,
    accounts: [] as AnyArray,
    formShow: false,
    form: {
      name: '',
      type: 1,
      icon: '',
      amount: '',
      'card_no': ''
    } as form
  },
  onLoad(){
    this.getAccounts()
  },
  getAccounts(){
    getAccounts().then(res => {
      this.setData({
        accounts: res
      })
    })
  },
  onAdd(){
    this.setData({
      formShow: true
    })
  },
  onClose(){
    this.setData({
      formShow: false
    })
  },
  onDel(){
    ;
  },
  onSwitchChange(){
    const form = this.data.form
    form.type = form.type == 1 ? 2: 1
    this.setData({
      form
    })
  },
  onSave(){
    addAccount(this.data.form).then(res=>{
      console.log(res)
      this.getAccounts()
    })
  },
  onInput(e:any){
    const {id} = e.currentTarget
    const value = e.detail
    const {form} = this.data
    form[id] = value
    this.setData({
      form
    })
  },
  onBankNoAsk(){
    wx.showToast({
      title: '输入银行卡号可以快速匹配银行及logo',
      icon: 'none',
      duration: 2000
    })
  }
})