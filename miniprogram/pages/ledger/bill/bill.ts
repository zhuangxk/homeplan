const app = getApp() as IAppOption
Page({
    data: {
        show: false,
        CustomBar: app.globalData.CustomBar
    },
    // onClose(){
    //     this.setData({
    //         show: true
    //     })
    // }
    onAdd(){
        wx.navigateTo({
            url: "/pages/ledger/bill/bill_form/bill_form"
        })
        // this.setData({
        //     show: true
        // })
    },
    onClose(){
        this.setData({
            show: false
        })
    }
})