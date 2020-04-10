"use strict";
Page({
    data: {
        iconList: [{
                icon: 'cardboardfill',
                color: 'red',
                badge: 1,
                name: '登录',
                handler: 'login'
            }, {
                icon: 'recordfill',
                color: 'orange',
                badge: 1,
                name: '账本',
                handler: 'ledger'
            }, {
                icon: 'picfill',
                color: 'yellow',
                badge: 0,
                name: '账单',
                handler: 'bill'
            }]
    },
    login: function () {
        wx.getUserInfo({
            complete: function (data) {
                console.log(data);
            }
        });
    },
    ledger: function () {
        console.log('ledger');
    },
    bill: function () {
        console.log('bill');
    },
    bindGetUserInfo: function (e) {
        console.log(e.detail.userInfo);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxlQUFlO2dCQUNyQixLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsT0FBTzthQUNqQixFQUFFO2dCQUNELElBQUksRUFBRSxZQUFZO2dCQUNsQixLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsUUFBUTthQUNsQixFQUFFO2dCQUNELElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxNQUFNO2FBQ2hCLENBQUM7S0FDSDtJQUNELEtBQUs7UUFDSCxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2IsUUFBUSxZQUFDLElBQUk7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNuQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU07UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFDRCxJQUFJO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBQ0QsZUFBZSxFQUFmLFVBQWdCLENBQU07UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgaWNvbkxpc3Q6IFt7XHJcbiAgICAgIGljb246ICdjYXJkYm9hcmRmaWxsJyxcclxuICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICBiYWRnZTogMSxcclxuICAgICAgbmFtZTogJ+eZu+W9lScsXHJcbiAgICAgIGhhbmRsZXI6ICdsb2dpbidcclxuICAgIH0sIHtcclxuICAgICAgaWNvbjogJ3JlY29yZGZpbGwnLFxyXG4gICAgICBjb2xvcjogJ29yYW5nZScsXHJcbiAgICAgIGJhZGdlOiAxLFxyXG4gICAgICBuYW1lOiAn6LSm5pysJyxcclxuICAgICAgaGFuZGxlcjogJ2xlZGdlcidcclxuICAgIH0sIHtcclxuICAgICAgaWNvbjogJ3BpY2ZpbGwnLFxyXG4gICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgIGJhZGdlOiAwLFxyXG4gICAgICBuYW1lOiAn6LSm5Y2VJyxcclxuICAgICAgaGFuZGxlcjogJ2JpbGwnXHJcbiAgICB9XVxyXG4gIH0sXHJcbiAgbG9naW4oKXtcclxuICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgY29tcGxldGUoZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBsZWRnZXIoKXtcclxuICAgIGNvbnNvbGUubG9nKCdsZWRnZXInKVxyXG4gIH0sXHJcbiAgYmlsbCgpe1xyXG4gICAgY29uc29sZS5sb2coJ2JpbGwnKVxyXG4gIH0sXHJcbiAgYmluZEdldFVzZXJJbmZvKGU6IGFueSl7XHJcbiAgICBjb25zb2xlLmxvZyhlLmRldGFpbC51c2VySW5mbylcclxuICB9XHJcblxyXG59KSJdfQ==