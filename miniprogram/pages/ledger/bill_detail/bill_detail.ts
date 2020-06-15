import {formatTime} from "../../../utils/util"
import {addBillDeltail,updateillDeltail, delBillDeltail, getBillDeltails } from "../../../api/index"
Page({
  data: {
    bill: {} as AnyObject,
    downloadHost: 'https://oss.toko.wang/',
    fileList: [] as AnyArray,
    list: [] as AnyArray,
    showAction: false,
    saveType: 'add',
    id: 0,
    form: {
      name: '',
      amount: 1,
      money: "",
    } as Record<string, string | number>
  },
  onPreviewImage(): void {
    // const { url } = event.currentTarget.dataset;
    const { fileList } = this.data;

    wx.previewImage({
        urls: fileList,
        current: fileList[0],
        fail() {
            wx.showToast({ title: '预览图片失败', icon: 'none' });
        }
    });
  },
  onAdd(){
    this.setData({
      showAction: true,
      saveType: 'add'
    })
  },
  edit(){
    this.setData({
      showAction: true,
      saveType: 'edit'
    })
  },
  onDel(){
    delBillDeltail(this.data.id).then(res=>{
      console.log(res)
    })
  },
  onSave(){
    if(this.data.saveType == 'add') {
      const { bill, form } = this.data
      addBillDeltail(bill.id, form).then(()=>{
        this.getList()
      })
    }

    if(this.data.saveType == 'edit') {
      const { id, form } = this.data
      updateillDeltail(id, form).then(()=>{
        this.getList()
      })
    }
  },
  getList(){
    getBillDeltails(this.data.bill.id).then(res =>{
      this.setData({
        list: res
      })
    })
  },
  onClose(){
    this.setData({
      showAction: false
    })
  },
  onInput(e: AnyObject){
    console.log(e)
    const value = e.detail
    const key: string = e.currentTarget.id
    const { form } = this.data
    form[key] = value
    this.setData({
      form
    })
  },
  onLoad: function(){
    // const eventChannel = this.getOpenerEventChannel()
    // // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    // // eventChannel.emit('someEvent', {data: 'test'});
    // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    // eventChannel.on('acceptDataFromOpenerPage', data => {
    //   const { downloadHost } = this.data;
    //   const bill = data.bill
    //   const fileList = []
    //   bill.Pic1 && fileList.push(downloadHost + bill.Pic1.file_name)
    //   bill.Pic2 && fileList.push(downloadHost + bill.Pic2.file_name)
    //   this.setData({
    //     bill:  bill,
    //     billTime: formatTime(new Date(bill.bill_time)),
    //     fileList: fileList,
    //   })
    // })
    const { downloadHost } = this.data;
    const bill: AnyObject = {"id":82,"created_at":"2020-06-15T01:41:14+08:00","updated_at":"2020-06-15T01:41:14+08:00","deleted_at":null,"user_id":1,"ledger_id":1,"amount":"12","amount_type":1,"bill_type_id":3,"bill_time":"2020-06-15T01:40:38+08:00","comment":"我的美照","account_id":2,"pic_id1":44,"pic_id2":-1,"Pic1":{"id":44,"created_at":"2020-06-15T01:40:54+08:00","updated_at":"2020-06-15T01:40:54+08:00","deleted_at":null,"user_id":1,"bucket":"tokyoq","file_name":"bill_pic/tmp_24ac37a330362f679bd6a0cf3d3ab7ff0ebf1fcf96971330.jpg","size":63543,"mime_type":"image/jpeg","height":854,"width":640,"User":null},"Pic2":null,"User":{"id":1,"created_at":"2020-05-18T06:57:29+08:00","updated_at":"2020-06-15T13:57:28+08:00","deleted_at":null,"openid":"oB3Xd4qfY0cPOAZM6BXrq6kFF91k","username":"","age":0,"birthday":null,"email":"","role":"","address":"","nickname":"Tokyo","gender":1,"province":"Shandong","city":"Linyi","country":"China","language":"zh_CN","avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK34I6ltEp9qU3n2fia7Xb6CRNTEnsly0V7nPsPXCC0amPf13yUkZrUkn9PHOIFrCqfhF0LfSfd9qg/132"},"Account":{"id":2,"created_at":"2020-05-18T06:57:28+08:00","updated_at":"2020-05-18T06:57:28+08:00","deleted_at":null,"ledger_id":1,"user_id":1,"name":"支付宝","type":1,"icon":"emoji","ord":2,"amount":0},"Ledger":null,"BillType":{"id":3,"created_at":"2020-05-18T06:57:28+08:00","updated_at":"2020-05-18T06:57:28+08:00","deleted_at":null,"ledger_id":1,"user_id":1,"name":"支出3","type":1,"parent_id":-1,"icon":"emoji","children":null,"ord":3}}
    const fileList = []
    bill.Pic1 && fileList.push(downloadHost + bill.Pic1.file_name)
    bill.Pic2 && fileList.push(downloadHost + bill.Pic2.file_name)
    this.setData({
      bill:  bill,
      billTime: formatTime(new Date(bill.bill_time)),
      fileList: fileList,
    })
    this.getList()
  },
})

export {}