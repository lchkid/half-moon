const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function addCart(id, arr) {
  let isInCart = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      arr[i].count++
      isInCart = true
    }
  }
  if (!isInCart) {
    arr.push({
      id,
      count: 1
    })
  }
}

function getCart(arr1, arr2) {
  let s = arr1.reduce((a, item) => { 
    let obj = {...item}
    arr2.forEach(i => {
      if(i.id === item.id) {
        return Object.assign(obj, i)
      }
    })
    a.push(obj)
    return a  
  }, [])
  return s
}

function getIndex(id, arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].id === id) {
      return i
    }
  }
  return -1
}

function changeCount(id, n, arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].id === id) {
      arr[i].count = n
    }
  }
}

module.exports = {
  formatTime: formatTime,
  addCart: addCart,
  getCart: getCart,
  getIndex: getIndex,
  changeCount: changeCount
}
