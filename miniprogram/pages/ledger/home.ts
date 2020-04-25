
Page({
    data: {
        PageCur: "main",
        active:0 
    },
    onChange(event: any) {
        // event.detail 的值为当前选中项的索引
        this.setData({ active: event.detail });
    }
})