//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    icon1src: '../../resources/icon1.png',
    icon1text:"餐饮",
    icon2src: '../../resources/icon2.png',
    icon2text: "早餐",
    icon3src: '../../resources/icon3.png',
    icon3text: "下午茶",
    icon4src: '../../resources/icon4.png',
    icon4text: "夜宵",
    icon5src: '../../resources/icon5.png',
    icon5text: "专送",
    icon6src: '../../resources/icon6.png',
    icon6text: "超市购",
    icon7src: '../../resources/icon7.png',
    icon7text: "水果生鲜",
    icon8src: '../../resources/icon8.png',
    icon8text: "服务",
    icon9src: '../../resources/icon9.png',
    icon9text: "品牌",
    icon10src: '../../resources/icon10.png',
    icon10text: "特惠",
    zhpx:"综合排序",
    top:"销量",
    distance:"距离",
    sx:'筛选',
    bricon1src:"../../resources/brand1.png",
    brName1:"口水滴答麻辣烫",
    xxsrc:"../../resources/xx.png",
    pfNum:"5.0",
    ysNum:"月售135份",
    needTime:"40分钟",
    qsPrice:"起送￥20",
    psPrice:"配送￥3.5"

  },
 
  tabBar:{
    "list":[{
      "pagePath":"pages/index/index",
      "text":'首页'
    },{
        "pagePath": "pages/index/index",
        "text": '订单'
    

    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
