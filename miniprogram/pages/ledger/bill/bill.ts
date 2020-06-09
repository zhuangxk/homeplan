const app = getApp() as IAppOption
import { getBills } from "../../../api/index"
Component({
    data: {
        show: false,
        CustomBar: app.globalData.CustomBar,
        bills: [] as AnyArray,
        dayBills: [] as AnyArray,
        loading: false,
        complete: false,
        total: 0,
        params: {
            "page": 1,
            "page_size": 20
        }
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
        },
        bills(): void {
            this.setData({

            })
        }
    },
    methods: {
        getBills(): void{
            if(!this.data.ledgerId){
                return
            }
            if(this.data.loading || this.data.complete){
                return
            }
            this.data.loading = true
            wx.showLoading({
                title: '加载中'
            })
            getBills(this.data.ledgerId, this.data.params).then(res=>{
                const { bills } = this.data
                bills.concat(res.list)
                this.setData({
                    bills: bills.concat(res.list),
                    total: res.total
                })
                wx.hideLoading()
                this.data.loading = false
                if(this.data.bills.length >= this.data.total){
                    this.data.complete = true
                }
            })
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
            this.data.params.page=1
            this.data.bills = []
            this.getBills()
        },

        onScrollLower(): void{
            this.data.params.page++
            this.getBills()
        },
    }

})

export { }

