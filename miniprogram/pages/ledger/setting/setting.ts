const app = getApp<IAppOption>()
console.log('setting 组件开始构建')
Component({
    options:{
        addGlobalClass: true
    },
    data:{
        dddd: 'ddd',
    },
    lifetimes: {
        ready(){
            console.log(app.globalData.userInfo)
            this.setData({
                userInfo: app.globalData.userInfo
            })
        }
    }
})