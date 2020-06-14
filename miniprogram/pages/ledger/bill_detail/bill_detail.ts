Page({
  data: {
    bill: {} as AnyObject,
    downloadHost: 'https://oss.toko.wang/',
    fileList: [] as AnyArray
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
  onLoad: function(){
    
    const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    // eventChannel.emit('someEvent', {data: 'test'});
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', data => {
      const { downloadHost } = this.data;
      const bill = data.bill
      const fileList = []
      bill.Pic1 && fileList.push(downloadHost + bill.Pic1.file_name)
      bill.Pic2 && fileList.push(downloadHost + bill.Pic2.file_name)
      this.setData({
        bill:  bill,
        billTime: new Date(bill.bill_time).toLocaleString(),
        fileList: fileList,
      })
    })
  },
})

export {}