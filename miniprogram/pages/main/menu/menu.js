"use strict";
Page({
    data: {
        ListTouchDirection: 'left',
        ListTouchStart: 0,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLGtCQUFrQixFQUFFLE1BQU07UUFDMUIsY0FBYyxFQUFFLENBQUM7UUFHakIsUUFBUSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxJQUFJO2FBQ1gsRUFBRTtnQkFDRCxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLElBQUk7YUFDWCxFQUFFO2dCQUNELElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxJQUFJO2FBQ1gsRUFBRTtnQkFDRCxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLElBQUk7YUFDWCxFQUFFO2dCQUNELElBQUksRUFBRSxhQUFhO2dCQUNuQixLQUFLLEVBQUUsTUFBTTtnQkFDYixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsS0FBSzthQUNaLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEtBQUssRUFBRSxNQUFNO2dCQUNiLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxJQUFJO2FBQ1gsRUFBRTtnQkFDRCxJQUFJLEVBQUUsY0FBYztnQkFDcEIsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLElBQUk7YUFDWCxFQUFFO2dCQUNELElBQUksRUFBRSxjQUFjO2dCQUNwQixLQUFLLEVBQUUsT0FBTztnQkFDZCxLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxJQUFJO2FBQ1gsRUFBRTtnQkFDRCxJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLElBQUk7YUFDWCxDQUFDO1FBQ0YsT0FBTyxFQUFFLENBQUM7UUFDVixJQUFJLEVBQUUsS0FBSztLQUNaO0lBQ0QsU0FBUyxZQUFDLENBQUs7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsU0FBUyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU07U0FDMUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFVBQVUsRUFBRSxVQUFVLENBQU07UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFVBQVUsRUFBRSxVQUFVLENBQU07UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDM0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFVBQVUsRUFBRSxVQUFVLENBQU07UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDM0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVMsRUFBRSxVQUFVLENBQU07UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFFBQVEsRUFBRSxVQUFVLENBQU07UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVMsRUFBRSxVQUFVLENBQU07UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDckIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELGNBQWMsWUFBQyxDQUFNO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxjQUFjLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1NBQ25DLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxhQUFhLFlBQUMsQ0FBTTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU07U0FDekYsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELFlBQVksWUFBQyxDQUFNO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxNQUFNLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxTQUFTLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTTthQUMxQyxDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxrQkFBa0IsRUFBRSxFQUFFO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgTGlzdFRvdWNoRGlyZWN0aW9uOiAnbGVmdCcsXHJcbiAgICBMaXN0VG91Y2hTdGFydDogMCxcclxuICAgIC8vIFN0YXR1c0JhcjogYXBwLmdsb2JhbERhdGEuU3RhdHVzQmFyLFxyXG4gICAgLy8gQ3VzdG9tQmFyOiBhcHAuZ2xvYmFsRGF0YS5DdXN0b21CYXIsXHJcbiAgICBpY29uTGlzdDogW3tcclxuICAgICAgaWNvbjogJ2NhcmRib2FyZGZpbGwnLFxyXG4gICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgIGJhZGdlOiAxMjAsXHJcbiAgICAgIG5hbWU6ICdWUidcclxuICAgIH0sIHtcclxuICAgICAgaWNvbjogJ3JlY29yZGZpbGwnLFxyXG4gICAgICBjb2xvcjogJ29yYW5nZScsXHJcbiAgICAgIGJhZGdlOiAxLFxyXG4gICAgICBuYW1lOiAn5b2V5YOPJ1xyXG4gICAgfSwge1xyXG4gICAgICBpY29uOiAncGljZmlsbCcsXHJcbiAgICAgIGNvbG9yOiAneWVsbG93JyxcclxuICAgICAgYmFkZ2U6IDAsXHJcbiAgICAgIG5hbWU6ICflm77lg48nXHJcbiAgICB9LCB7XHJcbiAgICAgIGljb246ICdub3RpY2VmaWxsJyxcclxuICAgICAgY29sb3I6ICdvbGl2ZScsXHJcbiAgICAgIGJhZGdlOiAyMixcclxuICAgICAgbmFtZTogJ+mAmuefpSdcclxuICAgIH0sIHtcclxuICAgICAgaWNvbjogJ3Vwc3RhZ2VmaWxsJyxcclxuICAgICAgY29sb3I6ICdjeWFuJyxcclxuICAgICAgYmFkZ2U6IDAsXHJcbiAgICAgIG5hbWU6ICfmjpLooYzmppwnXHJcbiAgICB9LCB7XHJcbiAgICAgIGljb246ICdjbG90aGVzZmlsbCcsXHJcbiAgICAgIGNvbG9yOiAnYmx1ZScsXHJcbiAgICAgIGJhZGdlOiAwLFxyXG4gICAgICBuYW1lOiAn55qu6IKkJ1xyXG4gICAgfSwge1xyXG4gICAgICBpY29uOiAnZGlzY292ZXJmaWxsJyxcclxuICAgICAgY29sb3I6ICdwdXJwbGUnLFxyXG4gICAgICBiYWRnZTogMCxcclxuICAgICAgbmFtZTogJ+WPkeeOsCdcclxuICAgIH0sIHtcclxuICAgICAgaWNvbjogJ3F1ZXN0aW9uZmlsbCcsXHJcbiAgICAgIGNvbG9yOiAnbWF1dmUnLFxyXG4gICAgICBiYWRnZTogMCxcclxuICAgICAgbmFtZTogJ+W4ruWKqSdcclxuICAgIH0sIHtcclxuICAgICAgaWNvbjogJ2NvbW1hbmRmaWxsJyxcclxuICAgICAgY29sb3I6ICdwdXJwbGUnLFxyXG4gICAgICBiYWRnZTogMCxcclxuICAgICAgbmFtZTogJ+mXruetlCdcclxuICAgIH0sIHtcclxuICAgICAgaWNvbjogJ2JyYW5kZmlsbCcsXHJcbiAgICAgIGNvbG9yOiAnbWF1dmUnLFxyXG4gICAgICBiYWRnZTogMCxcclxuICAgICAgbmFtZTogJ+eJiOadgydcclxuICAgIH1dLFxyXG4gICAgZ3JpZENvbDogMyxcclxuICAgIHNraW46IGZhbHNlXHJcbiAgfSxcclxuICBzaG93TW9kYWwoZTphbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG1vZGFsTmFtZTogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFyZ2V0XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgaGlkZU1vZGFsKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbW9kYWxOYW1lOiBudWxsXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ3JpZGNoYW5nZTogZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZ3JpZENvbDogZS5kZXRhaWwudmFsdWVcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ3JpZHN3aXRjaDogZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZ3JpZEJvcmRlcjogZS5kZXRhaWwudmFsdWVcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgbWVudUJvcmRlcjogZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbWVudUJvcmRlcjogZS5kZXRhaWwudmFsdWVcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgbWVudUFycm93OiBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtZW51QXJyb3c6IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG1lbnVDYXJkOiBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBtZW51Q2FyZDogZS5kZXRhaWwudmFsdWVcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3dpdGNoU2V4OiBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBza2luOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gTGlzdFRvdWNo6Kem5pG45byA5aeLXHJcbiAgTGlzdFRvdWNoU3RhcnQoZTogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBMaXN0VG91Y2hTdGFydDogZS50b3VjaGVzWzBdLnBhZ2VYXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8vIExpc3RUb3VjaOiuoeeul+aWueWQkVxyXG4gIExpc3RUb3VjaE1vdmUoZTogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBMaXN0VG91Y2hEaXJlY3Rpb246IGUudG91Y2hlc1swXS5wYWdlWCAtIHRoaXMuZGF0YS5MaXN0VG91Y2hTdGFydCA+IDAgPyAncmlnaHQnIDogJ2xlZnQnXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8vIExpc3RUb3VjaOiuoeeul+a7muWKqFxyXG4gIExpc3RUb3VjaEVuZChlOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuTGlzdFRvdWNoRGlyZWN0aW9uID09ICdsZWZ0Jykge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIG1vZGFsTmFtZTogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFyZ2V0XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIG1vZGFsTmFtZTogbnVsbFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgTGlzdFRvdWNoRGlyZWN0aW9uOiAnJ1xyXG4gICAgfSlcclxuICB9LFxyXG59KSJdfQ==