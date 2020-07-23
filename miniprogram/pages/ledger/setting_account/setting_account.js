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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19hY2NvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ19hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBQTREO0FBSTVELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxDQUFDO1FBQ1gsUUFBUSxFQUFFLEVBQWM7UUFDeEIsUUFBUSxFQUFFLEtBQUs7UUFDZixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLFNBQVMsRUFBRSxFQUFFO1NBQ047S0FDVjtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUNELFdBQVc7UUFBWCxpQkFNQztRQUxDLG1CQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3BCLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEdBQUc7YUFDZCxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUs7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNELGNBQWM7UUFDWixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxNQUFBO1NBQ0wsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU07UUFBTixpQkFLQztRQUpDLGtCQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE9BQU8sRUFBUCxVQUFRLENBQUs7UUFDSixJQUFBLHVCQUFFLENBQW1CO1FBQzVCLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDZixJQUFBLHFCQUFJLENBQWE7UUFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxNQUFBO1NBQ0wsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFdBQVc7UUFDVCxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLHFCQUFxQjtZQUM1QixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFjY291bnRzLCBhZGRBY2NvdW50IH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9pbmRleFwiXHJcbmludGVyZmFjZSBmb3JtIHtcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXJcclxufVxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBsZWRnZXJJRDogMSxcclxuICAgIGFjY291bnRzOiBbXSBhcyBBbnlBcnJheSxcclxuICAgIGZvcm1TaG93OiBmYWxzZSxcclxuICAgIGZvcm06IHtcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIHR5cGU6IDEsXHJcbiAgICAgIGljb246ICcnLFxyXG4gICAgICBhbW91bnQ6ICcnLFxyXG4gICAgICAnY2FyZF9ubyc6ICcnXHJcbiAgICB9IGFzIGZvcm1cclxuICB9LFxyXG4gIG9uTG9hZCgpe1xyXG4gICAgdGhpcy5nZXRBY2NvdW50cygpXHJcbiAgfSxcclxuICBnZXRBY2NvdW50cygpe1xyXG4gICAgZ2V0QWNjb3VudHMoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgYWNjb3VudHM6IHJlc1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uQWRkKCl7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmb3JtU2hvdzogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uQ2xvc2UoKXtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZvcm1TaG93OiBmYWxzZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uRGVsKCl7XHJcbiAgICA7XHJcbiAgfSxcclxuICBvblN3aXRjaENoYW5nZSgpe1xyXG4gICAgY29uc3QgZm9ybSA9IHRoaXMuZGF0YS5mb3JtXHJcbiAgICBmb3JtLnR5cGUgPSBmb3JtLnR5cGUgPT0gMSA/IDI6IDFcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZvcm1cclxuICAgIH0pXHJcbiAgfSxcclxuICBvblNhdmUoKXtcclxuICAgIGFkZEFjY291bnQodGhpcy5kYXRhLmZvcm0pLnRoZW4ocmVzPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgdGhpcy5nZXRBY2NvdW50cygpXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25JbnB1dChlOmFueSl7XHJcbiAgICBjb25zdCB7aWR9ID0gZS5jdXJyZW50VGFyZ2V0XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUuZGV0YWlsXHJcbiAgICBjb25zdCB7Zm9ybX0gPSB0aGlzLmRhdGFcclxuICAgIGZvcm1baWRdID0gdmFsdWVcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZvcm1cclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkJhbmtOb0Fzaygpe1xyXG4gICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgdGl0bGU6ICfovpPlhaXpk7booYzljaHlj7flj6/ku6Xlv6vpgJ/ljLnphY3pk7booYzlj4psb2dvJyxcclxuICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgfSlcclxuICB9XHJcbn0pIl19