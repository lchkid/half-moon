//app.js
import request from '/network/network'

App({
  onLaunch() {
    wx.getSystemInfo({
      success: (res) => {
        if (res.model.indexOf("iPhone X") != -1) {
          this.globalData.isFullScreen = true;
        }
      },
    })
    request({
      url: '/good'
    }).then(res => {
      this.globalData.goodList = res.data
    })
  },
  globalData: {
    isFullScreen: false,
    goodList: [],
    cartList: []
  }
})