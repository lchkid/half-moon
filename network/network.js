const baseUrl = 'https://my-json-server.typicode.com/lchkid/half-moon'

export default function(option) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + option.url,
      method: option.method || 'GET',
      data: option.data || {},
      success: resolve,
      fail: reject
    })
  })
}