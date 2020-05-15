
import { getDefaultLedger } from '../../api/index'
Page({
    data: {
        PageCur: "main",
        active: 0,
        defaultLedger: {

        }
    },
    onChange(event: any) {
        // event.detail 的值为当前选中项的索引
        this.setData({ active: event.detail });
    },
    async onLoad() {
        const defaultLedger = await getDefaultLedger()
        this.setData({
            defaultLedger
        })
    }
})