// components/hm-tabswitch/hm-tabswitch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick(e) {
      const index = e.currentTarget.dataset.index
      const type = e.currentTarget.dataset.type
      this.setData({
        currentIndex: index
      })
      this.triggerEvent("tabClick", {
        index,
        type
      })
    }
  }
})
