// pages/cart/cart.js
import { addCart, getCart, getIndex, changeCount } from '../../utils/util'
const app = getApp()
Page({
  data: {
    isFullScreen: false,
    goodList: [],
    isSelected: false
  },
  onLoad: function (options) {
    this.setData({
      isFullScreen: app.globalData.isFullScreen
    })
    if (Object.keys(options).length) {
      addCart(options.id, app.globalData.cartList)
    }
    const res = getCart(app.globalData.cartList, app.globalData.goodList)
    this.setData({
      goodList: res
    })
  },
  onShareAppMessage: function () {

  },
  goodClick(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id 
    })
  },
  // 商品数量-1
  subClick(e) {
    const id = e.currentTarget.dataset.id
    const count = e.currentTarget.dataset.count
    if (count === 1) {
      wx.showModal({
        title: '提示',
        content: '是否删除该商品',
        success: (res) => {
          if (res.confirm) {
            const index = getIndex(id, this.data.goodList)
            this.data.goodList.splice(index, 1)
            this.setData({
              goodList: this.data.goodList
            })
          } else if (res.cancel) {
            return false
          }
        }
      })
    } else {
      this.data.goodList.map(i => i.id === id && i.count--)
      this.setData({
        goodList: this.data.goodList
      })
      app.globalData.cartList = this.data.goodList
    }
  },
  // 商品数量+1
  supClick(e) {
    const id = e.currentTarget.dataset.id
    this.data.goodList.map(i => i.id === id && i.count++)
    this.setData({
      goodList: this.data.goodList
    })
    app.globalData.cartList = this.data.goodList
  },
  // 阻止冒泡
  countClick() {

  },
  selectClick() {
    this.setData({
      isSelected: !this.data.isSelected
    })
  }
})