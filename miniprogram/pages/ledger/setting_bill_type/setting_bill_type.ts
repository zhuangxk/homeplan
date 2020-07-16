const app = getApp() as IAppOption
import { getBillTypes } from "../../../api/index"
Page({

  data: {
    types: {
      1: [] as AnyArray,
      2: [] as AnyArray,
    } as Record<number, AnyArray>,
    editMode: false,
    deleteMode: false
  },
  async getTypes(): Promise<void>{
    app.globalData.ledger.id = 1
    if (!app.globalData.ledger.id){
      return
    }
    const billTypes = await getBillTypes(app.globalData.ledger.id)
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
      editMode: !this.data.editMode,
      deleteMode: false
    })
  },
  toggleDeleteMode(){
    this.setData({
      deleteMode: !this.data.deleteMode,
      editMode: false
    })
  }
})