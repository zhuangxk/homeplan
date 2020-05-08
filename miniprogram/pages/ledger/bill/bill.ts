const app = getApp() as IAppOption
Page({
    data: {
        show: true,
        CustomBar: app.globalData.CustomBar
    },
    // onClose(){
    //     this.setData({
    //         show: true
    //     })
    // }
    onAdd(){
        this.setData({
            show: true
        })
    },
    onClose(){
        this.setData({
            show: false
        })
    }
})

export { }
