// const app = getApp() as IAppOption
import { getBillTypes, addBillTypes } from "../../../api/index"
Page({

  data: {
    types: {
      1: [] as AnyArray,
      2: [] as AnyArray,
    } as Record<number, AnyArray>,
    editMode: false,
    formShow: false,
    saveType: 'add',
    activeID: 0,
    // ledgerID: app.globalData.ledger.id,
    ledgerID: 1,
    selectedIconIndex: 0,
    form: {
      name: '',
      type: 1,
      icon: ''
    },
    icons: ['verification_code','book','travel','food','digital','cultivate','plane','clothes',
      'train','car','education','cash-gift','oil','cosmetology','electric','home','shopping',
      'financing','fruits','cosmetics','work','snacks','communication','car-repair','traffic',
      'social','friends','pets','housing','tuition','child','parking','water','config','express',
      'elderly','vegetables','fun','sport','lottery','bookkeeping','reimbursement','taobao','salary',
      'wifi','user','bonus','alimony','part-time-job','refund','alipay','daily-necessities'
    ],
  },
  async getTypes(): Promise<void>{
    const billTypes = await getBillTypes(this.data.ledgerID)
    const types = {} as Record<number, AnyArray>
    billTypes.forEach(item => {
      types[item.type] = types[item.type] || []
      types[item.type].push(item)
    })
    this.setData({
      types,
      typeLoaded: true,
    })
  },
  onLoad(){
    this.getTypes() 
  },
  toggleEditMode(){
    this.setData({
      editMode: !this.data.editMode
    })
  },
  onAdd(e: any){
    const { type } = e.currentTarget.dataset
    this.setData({
      editMode: false,
      formShow: true,
      saveType: 'add',
      form: {
        name: '',
        type,
        icon: ''
      }
    })
  },
  onEdit(){
    this.setData({
      formShow: true,
      saveType: 'edit'
    })
  },
  onAddClose(){
    this.setData({
      formShow: false
    })
  },
  onInput(e: any){
    this.data.form.name = e.detail
  },
  onDel(){
    ''
  },
  onSave(){
    if(this.data.saveType == 'add'){
      addBillTypes(this.data.ledgerID, this.data.form).then(res=>{
          console.log(res)
      })
    }
  },
  onSel(e: any){
    const { index } = e.currentTarget.dataset
    this.setData({
      selectedIconIndex: index
    })
  }
  
})