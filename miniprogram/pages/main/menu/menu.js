"use strict";
Page({
    data: {
        ListTouchDirection: 'left',
        ListTouchStart: 0,
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        iconList: [{
                icon: 'cardboardfill',
                color: 'red',
                badge: 120,
                name: 'VR'
            }, {
                icon: 'recordfill',
                color: 'orange',
                badge: 1,
                name: '录像'
            }, {
                icon: 'picfill',
                color: 'yellow',
                badge: 0,
                name: '图像'
            }, {
                icon: 'noticefill',
                color: 'olive',
                badge: 22,
                name: '通知'
            }, {
                icon: 'upstagefill',
                color: 'cyan',
                badge: 0,
                name: '排行榜'
            }, {
                icon: 'clothesfill',
                color: 'blue',
                badge: 0,
                name: '皮肤'
            }, {
                icon: 'discoverfill',
                color: 'purple',
                badge: 0,
                name: '发现'
            }, {
                icon: 'questionfill',
                color: 'mauve',
                badge: 0,
                name: '帮助'
            }, {
                icon: 'commandfill',
                color: 'purple',
                badge: 0,
                name: '问答'
            }, {
                icon: 'brandfill',
                color: 'mauve',
                badge: 0,
                name: '版权'
            }],
        gridCol: 3,
        skin: false
    },
    showModal: function (e) {
        this.setData({
            modalName: e.currentTarget.dataset.target
        });
    },
    hideModal: function () {
        this.setData({
            modalName: null
        });
    },
    gridchange: function (e) {
        this.setData({
            gridCol: e.detail.value
        });
    },
    gridswitch: function (e) {
        this.setData({
            gridBorder: e.detail.value
        });
    },
    menuBorder: function (e) {
        this.setData({
            menuBorder: e.detail.value
        });
    },
    menuArrow: function (e) {
        this.setData({
            menuArrow: e.detail.value
        });
    },
    menuCard: function (e) {
        this.setData({
            menuCard: e.detail.value
        });
    },
    switchSex: function (e) {
        this.setData({
            skin: e.detail.value
        });
    },
    ListTouchStart: function (e) {
        this.setData({
            ListTouchStart: e.touches[0].pageX
        });
    },
    ListTouchMove: function (e) {
        this.setData({
            ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
        });
    },
    ListTouchEnd: function (e) {
        if (this.data.ListTouchDirection == 'left') {
            this.setData({
                modalName: e.currentTarget.dataset.target
            });
        }
        else {
            this.setData({
                modalName: null
            });
        }
        this.setData({
            ListTouchDirection: ''
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLGtCQUFrQixFQUFFLE1BQU07UUFDMUIsY0FBYyxFQUFFLENBQUM7UUFDakIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUztRQUNuQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTO1FBQ25DLFFBQVEsRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxlQUFlO2dCQUNyQixLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxJQUFJO2FBQ1gsRUFBRTtnQkFDRCxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxPQUFPO2dCQUNkLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxJQUFJO2FBQ1gsRUFBRTtnQkFDRCxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLEtBQUs7YUFDWixFQUFFO2dCQUNELElBQUksRUFBRSxhQUFhO2dCQUNuQixLQUFLLEVBQUUsTUFBTTtnQkFDYixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxJQUFJO2FBQ1gsRUFBRTtnQkFDRCxJQUFJLEVBQUUsY0FBYztnQkFDcEIsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLElBQUk7YUFDWCxFQUFFO2dCQUNELElBQUksRUFBRSxhQUFhO2dCQUNuQixLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxPQUFPO2dCQUNkLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQztRQUNGLE9BQU8sRUFBRSxDQUFDO1FBQ1YsSUFBSSxFQUFFLEtBQUs7S0FDWjtJQUNELFNBQVMsWUFBQyxDQUFLO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFNBQVMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1NBQzFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxVQUFVLEVBQUUsVUFBVSxDQUFNO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxVQUFVLEVBQUUsVUFBVSxDQUFNO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxVQUFVLEVBQUUsVUFBVSxDQUFNO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxTQUFTLEVBQUUsVUFBVSxDQUFNO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxRQUFRLEVBQUUsVUFBVSxDQUFNO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxTQUFTLEVBQUUsVUFBVSxDQUFNO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxjQUFjLFlBQUMsQ0FBTTtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsY0FBYyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztTQUNuQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsYUFBYSxZQUFDLENBQU07UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNO1NBQ3pGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxZQUFZLFlBQUMsQ0FBTTtRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLElBQUksTUFBTSxFQUFFO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU07YUFDMUMsQ0FBQyxDQUFBO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsa0JBQWtCLEVBQUUsRUFBRTtTQUN2QixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KCk7XG5QYWdlKHtcbiAgZGF0YToge1xuICAgIExpc3RUb3VjaERpcmVjdGlvbjogJ2xlZnQnLFxuICAgIExpc3RUb3VjaFN0YXJ0OiAwLFxuICAgIFN0YXR1c0JhcjogYXBwLmdsb2JhbERhdGEuU3RhdHVzQmFyLFxuICAgIEN1c3RvbUJhcjogYXBwLmdsb2JhbERhdGEuQ3VzdG9tQmFyLFxuICAgIGljb25MaXN0OiBbe1xuICAgICAgaWNvbjogJ2NhcmRib2FyZGZpbGwnLFxuICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgYmFkZ2U6IDEyMCxcbiAgICAgIG5hbWU6ICdWUidcbiAgICB9LCB7XG4gICAgICBpY29uOiAncmVjb3JkZmlsbCcsXG4gICAgICBjb2xvcjogJ29yYW5nZScsXG4gICAgICBiYWRnZTogMSxcbiAgICAgIG5hbWU6ICflvZXlg48nXG4gICAgfSwge1xuICAgICAgaWNvbjogJ3BpY2ZpbGwnLFxuICAgICAgY29sb3I6ICd5ZWxsb3cnLFxuICAgICAgYmFkZ2U6IDAsXG4gICAgICBuYW1lOiAn5Zu+5YOPJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdub3RpY2VmaWxsJyxcbiAgICAgIGNvbG9yOiAnb2xpdmUnLFxuICAgICAgYmFkZ2U6IDIyLFxuICAgICAgbmFtZTogJ+mAmuefpSdcbiAgICB9LCB7XG4gICAgICBpY29uOiAndXBzdGFnZWZpbGwnLFxuICAgICAgY29sb3I6ICdjeWFuJyxcbiAgICAgIGJhZGdlOiAwLFxuICAgICAgbmFtZTogJ+aOkuihjOamnCdcbiAgICB9LCB7XG4gICAgICBpY29uOiAnY2xvdGhlc2ZpbGwnLFxuICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgIGJhZGdlOiAwLFxuICAgICAgbmFtZTogJ+earuiCpCdcbiAgICB9LCB7XG4gICAgICBpY29uOiAnZGlzY292ZXJmaWxsJyxcbiAgICAgIGNvbG9yOiAncHVycGxlJyxcbiAgICAgIGJhZGdlOiAwLFxuICAgICAgbmFtZTogJ+WPkeeOsCdcbiAgICB9LCB7XG4gICAgICBpY29uOiAncXVlc3Rpb25maWxsJyxcbiAgICAgIGNvbG9yOiAnbWF1dmUnLFxuICAgICAgYmFkZ2U6IDAsXG4gICAgICBuYW1lOiAn5biu5YqpJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdjb21tYW5kZmlsbCcsXG4gICAgICBjb2xvcjogJ3B1cnBsZScsXG4gICAgICBiYWRnZTogMCxcbiAgICAgIG5hbWU6ICfpl67nrZQnXG4gICAgfSwge1xuICAgICAgaWNvbjogJ2JyYW5kZmlsbCcsXG4gICAgICBjb2xvcjogJ21hdXZlJyxcbiAgICAgIGJhZGdlOiAwLFxuICAgICAgbmFtZTogJ+eJiOadgydcbiAgICB9XSxcbiAgICBncmlkQ29sOiAzLFxuICAgIHNraW46IGZhbHNlXG4gIH0sXG4gIHNob3dNb2RhbChlOmFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBtb2RhbE5hbWU6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRhcmdldFxuICAgIH0pXG4gIH0sXG4gIGhpZGVNb2RhbCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbW9kYWxOYW1lOiBudWxsXG4gICAgfSlcbiAgfSxcbiAgZ3JpZGNoYW5nZTogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBncmlkQ29sOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pO1xuICB9LFxuICBncmlkc3dpdGNoOiBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGdyaWRCb3JkZXI6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSk7XG4gIH0sXG4gIG1lbnVCb3JkZXI6IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbWVudUJvcmRlcjogZS5kZXRhaWwudmFsdWVcbiAgICB9KTtcbiAgfSxcbiAgbWVudUFycm93OiBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIG1lbnVBcnJvdzogZS5kZXRhaWwudmFsdWVcbiAgICB9KTtcbiAgfSxcbiAgbWVudUNhcmQ6IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbWVudUNhcmQ6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSk7XG4gIH0sXG4gIHN3aXRjaFNleDogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBza2luOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIC8vIExpc3RUb3VjaOinpuaRuOW8gOWni1xuICBMaXN0VG91Y2hTdGFydChlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgTGlzdFRvdWNoU3RhcnQ6IGUudG91Y2hlc1swXS5wYWdlWFxuICAgIH0pXG4gIH0sXG5cbiAgLy8gTGlzdFRvdWNo6K6h566X5pa55ZCRXG4gIExpc3RUb3VjaE1vdmUoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIExpc3RUb3VjaERpcmVjdGlvbjogZS50b3VjaGVzWzBdLnBhZ2VYIC0gdGhpcy5kYXRhLkxpc3RUb3VjaFN0YXJ0ID4gMCA/ICdyaWdodCcgOiAnbGVmdCdcbiAgICB9KVxuICB9LFxuXG4gIC8vIExpc3RUb3VjaOiuoeeul+a7muWKqFxuICBMaXN0VG91Y2hFbmQoZTogYW55KSB7XG4gICAgaWYgKHRoaXMuZGF0YS5MaXN0VG91Y2hEaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBtb2RhbE5hbWU6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRhcmdldFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbW9kYWxOYW1lOiBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgTGlzdFRvdWNoRGlyZWN0aW9uOiAnJ1xuICAgIH0pXG4gIH0sXG59KSJdfQ==