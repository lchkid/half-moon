// pages/detail/child-comps/detail-tabbar/detail-tabbar.js
Component({
  properties: {
    isFullScreen: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    cartClick() {
      this.triggerEvent("cartClick")
    },
    addClick() {
      this.triggerEvent("addClick")
    },
    buyClick() {
      this.triggerEvent("buyClick")
    }
  }
})
