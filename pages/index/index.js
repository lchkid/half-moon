//index.js
import request from '../../network/network'

Page({
  data: {
    banners: [],
    sorts: [
      {
        type: "all",
        text: "全部"
      },
      {
        type: "new",
        text: "新品"
      },
      {
        type: "sell",
        text: "畅销"
      }
    ],
    originGoods: [],
    goods: []
  },
  tabClick(e) {
    const type = e.detail.type
    if (type === "all") {
      this.setData({
        goods: this.data.originGoods.concat()
      })
    } else if (type === "new") {
      this.setData({
        goods: this.data.goods.sort((a, b) => b.id - a.id)
      })
    } else {
      this.setData({
        goods: this.data.goods.sort((a, b) => b.sell - a.sell)
      })
    }
  },
  onLoad() {
    this.getBanner()
    this.getGood()
  },
  getBanner() {
    request({
      url: '/banner'
    }).then(res => {
      this.setData({
        banners: res.data
      })
    })
  },
  getGood() {
    request({
      url: '/good'
    }).then(res => {
      this.setData({
        originGoods: res.data,
        goods: res.data.concat()
      })
    })
  }
})