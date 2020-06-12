const app = getApp() as IAppOption
import { getBills } from "../../../api/index"
import { formatMonthDate } from "../../../utils/util"
Component({
    data: {
        show: false,
        CustomBar: app.globalData.CustomBar,
        bills: [] as AnyArray,
        dateMap: {} as Record<string, AnyObject>,
        monthMap: {} as Record<string, AnyObject>,
        dateMapKeys: [] as Array<string>,
        loading: false,
        total: 0,
        params: {
            "page": 1,
            "page_size": -1
        },
        localsNum: ["一","二","三","四","五","六","七","八","九","十","十一","十二"],
    },
    properties: {
        ledgerId: { 
            type: Number
        }  
    },
    lifetimes: {
        ready(): void{
          this.getBills()  
        }
    },
    observers: {
        ledgerId(): void {
            this.getBills() 
        }
    },
    methods: {
        onClick(): void{
            wx.navigateTo({
                url: '/pages/ledger/bill_detail/bill_detail',
                events: {
                    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
                    acceptDataFromOpenedPage: function(data: any): void {
                      console.log(data)
                    },
                    someEvent: function(data: any): void {
                      console.log(data)
                    }
                  },
                  success: function(res) {
                    // 通过eventChannel向被打开页面传送数据
                    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
                  }
            })
        },
        getBills(): void{
            if(!this.data.ledgerId){
                return
            }
            if(this.data.loading){
                return
            }
            this.data.loading = true
            wx.showLoading({
                title: '加载中'
            })
            getBills(this.data.ledgerId, this.data.params).then(res=>{
                this.handleBillsRes(res)
                wx.hideLoading()
                this.data.loading = false
            })
        },
        handleBillsRes(res: AnyObject): void{
            const list = res.list as AnyArray
            const dateCount = res.date_count as AnyArray
            const monthCount = res.month_count as AnyArray
            const dateMap = {} as Record<string, AnyObject>
            dateCount.forEach(item=>{
                dateMap[this.getDateKey(item.date)] = {
                    list:[],
                    total: item.total,
                    sumIn: item.sum_in,
                    sumOut: item.sum_out,
                }
            })
            
            list.forEach( item => {
                const date = dateMap[this.getDateKey(item.bill_time)]
                if(date.list){
                    date.list.push(item)
                } else {
                    wx.showToast({
                        title: "计数出错"
                    })
                }
            })
            this.setData({
                total: res.total,
                dateMap,
                dateMapKeys: Object.keys(dateMap),
                monthMap: monthCount[0],
            })
       
        },
        getDateKey(iosdate: string): string{
            const date = new Date(iosdate)
            let dateKey = formatMonthDate(date) + "  星期" + this.data.localsNum[date.getDay() - 1]
            if(formatMonthDate(date) == formatMonthDate(new Date())){
                dateKey = "今日  星期" + this.data.localsNum[new Date().getDay() - 1]
            }
            return dateKey
        },
        onAdd(): void{
            this.setData({
                show: true
            })
        },
  
        onClose(): void{
            this.setData({
                show: false
            })
        },

        onSave(): void{
            this.setData({
                show: false
            })
            this.getBills()
        },
    }

})

export { }

