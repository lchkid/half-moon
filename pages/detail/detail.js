// pages/detail/detail.js
import request from '../../network/network'
import { addCart } from '../../utils/util'
const app = getApp()

Page({
  data: {
    id: '',
    good: {},
    showb2t: false,
    isFullScreen: false
  },
  b2tClick() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 500
    })
  },
  cartClick() {
    wx.navigateTo({
      url: '/pages/cart/cart'
    })
  },
  addClick() {
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 1000,
      mask: true
    })
    addCart(this.data.id, app.globalData.cartList)
  },
  buyClick() {
    wx.navigateTo({
      url: '/pages/cart/cart?id=' + this.data.id 
    })
  },
  onLoad: function (options) {
    const id = options.id
    request({
      url: '/detail',
      data: {
        id
      }
    }).then(res => {
      this.setData({
        id,
        good: res.data[0]
      })
    })
    this.setData({
      isFullScreen: app.globalData.isFullScreen
    })
  },
  onShareAppMessage: function () {
    const shareImg = this.data.good.imgUrl[0]
    return {
      imageUrl: shareImg
    }
  },
  onPageScroll(options) {
    const top = options.scrollTop
    let judge = top >= 1000
    if (judge !== this.data.showb2t) {
      this.setData({
        showb2t: judge
      })
    }
  }
})