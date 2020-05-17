const app = getApp() as IAppOption

Component({
    data: {
        show: false,
        CustomBar: app.globalData.CustomBar,
        BillTypes: [] as any,
        accounts: []
    },
    properties: {
        ledgerId: {
            type: Number
        }  
    },
    // observers: {
    //     "ledgerId" (val): void{
    //         if(val){
    //             getBillTypes(val).then(( res: any )=> {
    //                 this.setData({
    //                     BillTypes: res
    //                 })
    //             })
    //         }
    //     }
    // },
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
        
       
    }

})

export { }

