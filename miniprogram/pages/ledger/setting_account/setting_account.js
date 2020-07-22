"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../api/index");
Page({
    data: {
        ledgerID: 1,
        accounts: [],
    },
    onLoad: function () {
        this.getAccounts();
    },
    getAccounts: function () {
        var _this = this;
        index_1.getAccounts(this.data.ledgerID).then(function (res) {
            _this.setData({
                accounts: res
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19hY2NvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ19hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBQWdEO0FBQ2hELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxDQUFDO1FBQ1gsUUFBUSxFQUFFLEVBQWM7S0FDekI7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFDRCxXQUFXO1FBQVgsaUJBTUM7UUFMQyxtQkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWNjb3VudHMgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2luZGV4XCJcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbGVkZ2VySUQ6IDEsXG4gICAgYWNjb3VudHM6IFtdIGFzIEFueUFycmF5LFxuICB9LFxuICBvbkxvYWQoKXtcbiAgICB0aGlzLmdldEFjY291bnRzKClcbiAgfSxcbiAgZ2V0QWNjb3VudHMoKXtcbiAgICBnZXRBY2NvdW50cyh0aGlzLmRhdGEubGVkZ2VySUQpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGFjY291bnRzOiByZXNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufSkiXX0=