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
            const date_count = res.date_count as AnyArray
            const month_count = res.month_count as AnyArray
            const dateMap = {} as Record<string, AnyObject>
            date_count.forEach(item=>{
                dateMap[this.getDateKey(item.date)] = {
                    list:[],
                    total: item.total,
                    sum_in: item.sum_in,
                    sum_out: item.sum_out,
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
                monthMap: month_count[0],
            })
       
        },
        getDateKey(iosdate:string): string{
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

