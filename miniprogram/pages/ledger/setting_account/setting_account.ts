import { getAccounts } from "../../../api/index"
Page({
  data: {
    ledgerID: 1,
    accounts: [] as AnyArray,
  },
  onLoad(){
    this.getAccounts()
  },
  getAccounts(){
    getAccounts(this.data.ledgerID).then(res => {
      this.setData({
        accounts: res
      })
    })
  }
})