"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../api/index");
Page({
    data: {
        ledgerID: 1,
        accounts: [],
        formShow: false,
        form: {
            name: '',
            type: 1,
            icon: '',
            amount: '',
            'card_no': ''
        }
    },
    onLoad: function () {
        this.getAccounts();
    },
    getAccounts: function () {
        var _this = this;
        index_1.getAccounts().then(function (res) {
            _this.setData({
                accounts: res
            });
        });
    },
    onAdd: function () {
        this.setData({
            formShow: true
        });
    },
    onClose: function () {
        this.setData({
            formShow: false
        });
    },
    onDel: function () {
        ;
    },
    onSwitchChange: function () {
        var form = this.data.form;
        form.type = form.type == 1 ? 2 : 1;
        this.setData({
            form: form
        });
    },
    onSave: function () {
        var _this = this;
        index_1.addAccount(this.data.form).then(function (res) {
            console.log(res);
            _this.getAccounts();
            _this.setData({
                formShow: false
            });
        });
    },
    onInput: function (e) {
        var id = e.currentTarget.id;
        var value = e.detail;
        var form = this.data.form;
        form[id] = value;
        this.setData({
            form: form
        });
    },
    onBankNoAsk: function () {
        wx.showToast({
            title: '输入银行卡号可以快速匹配银行及logo',
            icon: 'none',
            duration: 2000
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19hY2NvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ19hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBQTREO0FBSTVELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxDQUFDO1FBQ1gsUUFBUSxFQUFFLEVBQWM7UUFDeEIsUUFBUSxFQUFFLEtBQUs7UUFDZixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLFNBQVMsRUFBRSxFQUFFO1NBQ047S0FDVjtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUNELFdBQVc7UUFBWCxpQkFNQztRQUxDLG1CQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3BCLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEdBQUc7YUFDZCxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUs7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNELGNBQWM7UUFDWixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxNQUFBO1NBQ0wsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU07UUFBTixpQkFRQztRQVBDLGtCQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEtBQUs7YUFDaEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsT0FBTyxFQUFQLFVBQVEsQ0FBSztRQUNKLElBQUEsdUJBQUUsQ0FBbUI7UUFDNUIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtRQUNmLElBQUEscUJBQUksQ0FBYTtRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFBO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLE1BQUE7U0FDTCxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsV0FBVztRQUNULEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUscUJBQXFCO1lBQzVCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWNjb3VudHMsIGFkZEFjY291bnQgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2luZGV4XCJcclxuaW50ZXJmYWNlIGZvcm0ge1xyXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlclxyXG59XHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGxlZGdlcklEOiAxLFxyXG4gICAgYWNjb3VudHM6IFtdIGFzIEFueUFycmF5LFxyXG4gICAgZm9ybVNob3c6IGZhbHNlLFxyXG4gICAgZm9ybToge1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgdHlwZTogMSxcclxuICAgICAgaWNvbjogJycsXHJcbiAgICAgIGFtb3VudDogJycsXHJcbiAgICAgICdjYXJkX25vJzogJydcclxuICAgIH0gYXMgZm9ybVxyXG4gIH0sXHJcbiAgb25Mb2FkKCl7XHJcbiAgICB0aGlzLmdldEFjY291bnRzKClcclxuICB9LFxyXG4gIGdldEFjY291bnRzKCl7XHJcbiAgICBnZXRBY2NvdW50cygpLnRoZW4ocmVzID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBhY2NvdW50czogcmVzXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25BZGQoKXtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZvcm1TaG93OiB0cnVlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25DbG9zZSgpe1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZm9ybVNob3c6IGZhbHNlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25EZWwoKXtcclxuICAgIDtcclxuICB9LFxyXG4gIG9uU3dpdGNoQ2hhbmdlKCl7XHJcbiAgICBjb25zdCBmb3JtID0gdGhpcy5kYXRhLmZvcm1cclxuICAgIGZvcm0udHlwZSA9IGZvcm0udHlwZSA9PSAxID8gMjogMVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZm9ybVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uU2F2ZSgpe1xyXG4gICAgYWRkQWNjb3VudCh0aGlzLmRhdGEuZm9ybSkudGhlbihyZXM9PntcclxuICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICB0aGlzLmdldEFjY291bnRzKClcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmb3JtU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuICBvbklucHV0KGU6YW55KXtcclxuICAgIGNvbnN0IHtpZH0gPSBlLmN1cnJlbnRUYXJnZXRcclxuICAgIGNvbnN0IHZhbHVlID0gZS5kZXRhaWxcclxuICAgIGNvbnN0IHtmb3JtfSA9IHRoaXMuZGF0YVxyXG4gICAgZm9ybVtpZF0gPSB2YWx1ZVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZm9ybVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uQmFua05vQXNrKCl7XHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogJ+i+k+WFpemTtuihjOWNoeWPt+WPr+S7peW/q+mAn+WMuemFjemTtuihjOWPimxvZ28nLFxyXG4gICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICB9KVxyXG4gIH1cclxufSkiXX0=