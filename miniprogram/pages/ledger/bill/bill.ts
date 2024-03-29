const app = getApp() as IAppOption
import { getBills, delBill } from "../../../api/index"
import { formatMonthDate } from "../../../utils/util"
import Dialog from "@vant/weapp/dialog/dialog"
// const Dialog = require('@vant/weapp/dialog/dialog')

const year = new Date().getFullYear()
const month = new Date().getMonth()
Component({
    data: {
        keyboardShow: false,
        CustomBar: app.globalData.CustomBar,
        bills: [] as AnyArray,
        dateMap: {} as Record<string, AnyObject>,
        monthMap: {} as Record<string, AnyObject>,
        dateMapKeys: [] as Array<string>,
        loading: false,
        total: 0,
        slideReset: true,
        params: {
            "year": year,
            "month": month +1,
            "page": 1,
            "page_size": -1
        },
        localDay: ["日", "一","二","三","四","五","六"],
        actionType: 'add',
        curEditItem: {},
        lastTouchId: 0,
        pickerVal: year + '年' + (month + 1) + '月',
        months: [
            {
                values:  [year - 2 + '年', year - 1 + '年', year + '年'],
                defaultIndex: 2
            },
            {
                values: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
                defaultIndex: month
            }
        ],
        monthShow: false
    },
    properties: {
        ledgerId: { 
            type: Number
        }  
    },
    lifetimes: {
        // ready(): void{
        //   this.getBills()
        // }
    },
    observers: {
        ledgerId(): void {
            this.getBills() 
        }
    },
    methods: {
        onClick(e): void{
            const bill =  e.currentTarget.dataset.item
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
                    res.eventChannel.emit('acceptDataFromOpenerPage', { bill: bill })
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
            this.setData({
                loading: true
            },()=>{
                wx.showLoading({
                    title: '加载中'
                })
                getBills(this.data.ledgerId, this.data.params).then(res=>{
                    this.handleBillsRes(res)
                    wx.hideLoading()
                    this.setData({
                        loading: false
                    })
                })                
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
                monthMap: monthCount[0] || {},
            })
       
        },
        getDateKey(iosdate: string): string{
            const date = new Date(iosdate)
            let dateKey = formatMonthDate(date) + "  星期" + this.data.localDay[date.getDay()]
            if(formatMonthDate(date) == formatMonthDate(new Date())){
                dateKey = "今日  星期" + this.data.localDay[new Date().getDay()]
            }
            return dateKey
        },
        onAdd(): void{
            this.setData({
                curEditItem: {},
                actionType: 'add',
                keyboardShow: true
            })
        },
  
        onClose(): void{
            this.setData({
                keyboardShow: false
            })
        },

        onSave(): void{
            this.setData({
                keyboardShow: false,
                slideReset: true,
            })
            this.getBills()
        },

        onClickDelete(e): void{
            const self = this
            const id = e.currentTarget.dataset.id
            Dialog({
                showCancelButton: true,
                title: '提示',
                message: '确定要删除吗？',
                asyncClose: true
              })
            .then(() => {
                if(Dialog.confirm)
                    delBill(id).then(_=>{
                        if(Dialog.close)
                        Dialog.close()
                        self.getBills()
                    })
                }
            )
            .catch(() => {
                if(Dialog.close)
                Dialog.close()
            });
        },

        onClickEdit(e): void{
            this.setData({
                curEditItem: e.currentTarget.dataset.item,
                actionType: 'edit',
                keyboardShow: true
            })
        },

        onTouchstart(e){
            const id = e.currentTarget.dataset.id
            if(id == this.data.lastTouchId){
                return
            }
            this.setData({
                lastTouchId: id,
                slideReset: true,
            })
        },

        onMonthCancel(): void{
            this.setData({
                monthShow: false
            })
        },
        onMonthShow(): void{
            this.setData({
                monthShow: true
            })
        },
        onMonthConfirm(e): void{
            const [yi, mi] = e.detail.index
            this.setData({
                monthShow: false,
                pickerVal: [year - 2, year - 1, year][yi] + '年' + (mi+1) + '月',
                params: {
                    "page_size": -1,
                    page:1,
                    month: mi + 1,
                    year: [year - 2, year - 1, year][yi]
                }
            }, ()=>{
                this.getBills()
            })
        }


    }

})

export { }

