const app = getApp() as IAppOption
import { getBills } from "../../../api/index"
import { formatMonthDate } from "../../../utils/util"
Component({
    data: {
        show: false,
        CustomBar: app.globalData.CustomBar,
        bills: [] as AnyArray,
        dateMap: {} as Record<string, AnyObject>,
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
            const dateMap = {} as Record<string, AnyObject>
            list.forEach( item => {
                const date = new Date(item.bill_time)
                const dateKey = formatMonthDate(date) + "  星期" + this.data.localsNum[date.getDay() - 1]
                dateMap[dateKey] = dateMap[dateKey] || {
                    list:[],
                    total: 0,
                    count: 0
                }
                dateMap[dateKey]
            })
            this.setData({
                bills: res.list,
                total: res.total,
                dateMap
            })
            console.log(this.data.dateMap)
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

