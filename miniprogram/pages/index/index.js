"use strict";
var app = getApp();
Page({
    data: {
        PageCur: 'main',
    },
    NavChange: function (e) {
        this.setData({
            PageCur: e.currentTarget.dataset.cur
        });
    },
    onShareAppMessage: function () {
        return {
            title: 'ColorUI-高颜值的小程序UI组件库',
            imageUrl: '/images/share.jpg',
            path: '/pages/index/index'
        };
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFaEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07S0FDaEI7SUFDRCxTQUFTLFlBQUMsQ0FBTTtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxPQUFPLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRztTQUNyQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixJQUFJLEVBQUUsb0JBQW9CO1NBQzNCLENBQUE7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBNkJELFdBQVcsWUFBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBQYWdlQ3VyOiAnbWFpbicsXG4gIH0sXG4gIE5hdkNoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgUGFnZUN1cjogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY3VyXG4gICAgfSlcbiAgfSxcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnQ29sb3JVSS3pq5jpopzlgLznmoTlsI/nqIvluo9VSee7hOS7tuW6kycsXG4gICAgICBpbWFnZVVybDogJy9pbWFnZXMvc2hhcmUuanBnJyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXG4gICAgfVxuICB9LFxuICAvLyDkuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdUYXAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnLFxuICAgIH0pXG4gIH0sXG4gIC8vIG9uTG9hZCgpIHtcbiAgLy8gICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgLy8gICAgIHRoaXMuc2V0RGF0YSh7XG4gIC8vICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgLy8gICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gIC8vICAgICB9KVxuICAvLyAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcbiAgLy8gICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gIC8vICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gIC8vICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gcmVzID0+IHtcbiAgLy8gICAgICAgdGhpcy5zZXREYXRhKHtcbiAgLy8gICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAvLyAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAvLyAgICAgICB9KVxuICAvLyAgICAgfVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuICAvLyAgICAgd3guZ2V0VXNlckluZm8oe1xuICAvLyAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAvLyAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gIC8vICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgLy8gICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gIC8vICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgLy8gICAgICAgICB9KVxuICAvLyAgICAgICB9LFxuICAvLyAgICAgfSlcbiAgLy8gICB9XG4gIC8vIH0sXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICB9KVxuICB9LFxufSlcbiJdfQ==