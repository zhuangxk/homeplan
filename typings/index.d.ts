/// <reference path="../node_modules/miniprogram-api-typings/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo;
    ColorList?: { title: string; name: string; color: string }[];
    StatusBar?: number;
    Custom?: WechatMiniprogram.Rect;
    CustomBar?: number;
    isLogin?: boolean;
    ledger?: any;
  };
  getUserInfo: Function;
  userInfoReadyCallback: WechatMiniprogram.GetUserInfoSuccessCallback;
}