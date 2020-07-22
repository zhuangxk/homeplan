// const app = getApp() as IAppOption
import { getBillTypes, addBillType, delBillType, updateBillType, sortBillType } from "../../../api/index"
import Dialog from "@vant/weapp/dialog/dialog"

Page({

  data: {
    billTypes: [] as AnyArray,
    types: {
      1: [] as AnyArray,
      2: [] as AnyArray,
    } as Record<number, AnyArray>,
    otypes: [] as AnyArray,
    editMode: false,
    formShow: false,
    saveType: 'add',
    activeID: 0,
    // ledgerID: app.globalData.ledger.id,
    ledgerID: 1,
    selectedIconIndex: -1,
    form: {
      name: '',
      type: 1,
      icon: ''
    },
    icons: ['book','travel','food','digital','cultivate','plane','clothes',
      'train','car','education','cash-gift','oil','cosmetology','electric','home','shopping',
      'financing','fruits','cosmetics','work','snacks','communication','car-repair','traffic',
      'social','friends','pets','housing','tuition','child','parking','water','express',
      'elderly','vegetables','fun','sport','lottery','bookkeeping','reimbursement','taobao','salary',
      'wifi','user','bonus','alimony','part-time-job','refund','alipay','daily-necessities'
    ],
  },
  async getTypes(): Promise<void>{
    wx.showLoading({
      title: '加载中',
    })
    const billTypes = await getBillTypes(this.data.ledgerID)
    const types = {} as Record<number, AnyArray>
   
    billTypes.forEach(item => {
      types[item.type] = types[item.type] || []
      types[item.type].push(item)
    })
    this.setData({
      types,
      billTypes
    })
    wx.hideLoading()
  },
  onLoad(){
    this.getTypes() 
  },
  toggleEditMode(){
    this.setData({
      editMode: !this.data.editMode
    })
  },
  onSortend(e: any){
    console.log(e)
    const { listData } = e.detail
    const ids = listData.map((i: AnyObject)=>i.id)
    sortBillType({
      ids
    }).then(res=>{
      console.log(res)
    })
  },
  onAdd(e: any){
    const { type } = e.currentTarget.dataset
    this.setData({
      editMode: false,
      formShow: true,
      saveType: 'add',
      selectedIconIndex: -1,
      form: {
        name: '',
        type: parseInt(type),
        icon: ''
      }
    })
  },
  onEdit(e: any){
    const { id } = e.currentTarget.dataset
    const item = this.data.billTypes.find(i => i.id == id)
    const index = this.data.icons.findIndex(i => i == item.icon)
    this.setData({
      activeID: id,
      formShow: true,
      saveType: 'edit',
      selectedIconIndex: index,
      form: {
        icon: item.icon,
        type: item.type,
        name: item.name
      }
    })
  },
  onAddClose(){
    this.setData({
      formShow: false,
      editMode: false
    })
  },
  onInput(e: any){
    this.data.form.name = e.detail
  },
  onDel(){
    const self = this
    Dialog({
        showCancelButton: true,
        title: '提示',
        message: '确定要删除吗？',
        asyncClose: true
      })
    .then(() => {
        if(Dialog.confirm)
            delBillType(this.data.activeID).then(()=>{
              if(Dialog.close)
                Dialog.close()
              this.setData({
                formShow: false,
                editMode: false
              })
              self.getTypes()
            })
        }
    )
    .catch(() => {
        if(Dialog.close)
        Dialog.close()
    });

  },
  onSave(){
    if(this.data.saveType == 'add'){
      addBillType(this.data.ledgerID, this.data.form).then(()=>{
          this.getTypes()
          this.setData({
            formShow: false,
            editMode: false
          })
      })
    } else {
      updateBillType(this.data.activeID, this.data.form).then(()=>{
          this.getTypes()
          this.setData({
            formShow: false,
            editMode: false
          })
      })

    }
  },
  onSel(e: any){
    const { index } = e.currentTarget.dataset
    this.setData({
      selectedIconIndex: index,
      "form.icon": this.data.icons[index] 
    })
  }
  
})