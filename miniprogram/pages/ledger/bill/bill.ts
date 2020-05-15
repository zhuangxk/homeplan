const app = getApp() as IAppOption
import { getBillTypes } from '../../../api/index'

Component({
    data: {
        show: false,
        CustomBar: app.globalData.CustomBar,
        BillTypes: [],
        accounts: []
    },
    properties: {
        ledgerId: Number
    },
    observers: {
        "ledgerId" (val): void{
            if(val){
                getBillTypes(val).then(( res: any )=> {
                    this.setData({
                        BillTypes: res
                    })
                })
            }
        }
    },
    methods: {
        onAdd(): void{
            this.setData({
                show: true
            })
        },
  
        onClose(): void{
            this.setData({
                show: false
            })
        }        
    },
    lifetimes: {
        attached(): void{
            console.log('bill show')
            console.log(this)
        },
        ready(): void{
            console.log(this)
        }
    }

})

export { }
