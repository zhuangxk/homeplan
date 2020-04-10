/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo;
    ColorList?: { title: string; name: string; color: string }[];
    StatusBar?: number;
    Custom?: WechatMiniprogram.Rect;
    CustomBar?: number;
    logged?: boolean;
  };
  getUserInfo: Function;
  userInfoReadyCallback: WechatMiniprogram.GetUserInfoSuccessCallback;
}