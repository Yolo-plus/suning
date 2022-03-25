let tabbar = document.querySelector('.tabbar')
let eleP = tabbar.querySelectorAll('p')
let eleImg = tabbar.querySelectorAll('img')
let eleA = tabbar.querySelectorAll('a')

// 设置文字和图标样式
function setNameImg(index) {
  eleP[index].className = 'tabbar-active'
  eleA[index].querySelector('img').setAttribute('src', `images/tabbar${index + 1}1.png`)
}

// 点击跳转
function redirectme(hrefme) {
  window.location.href = hrefme
}

// 不能在这里定义样式，因为跳转后样式会被覆盖
function handleClick(e) {
  let elePOne = e.querySelector('p')

  if (elePOne.innerText === '猜我喜欢' || elePOne.innerText === '首页') {
    redirectme('index.html')
  } else if (elePOne.innerText === '分类') {
    redirectme('list.html')
  } else if (elePOne.innerText === '排行榜') {
    redirectme('rank.html')
  } else if (elePOne.innerText === '购物车') {
    redirectme('cart.html')
  } else if (elePOne.innerText === '我的易购') {
    redirectme('personal.html')
  }

  return false;
}

// 设置样式
(function () {
  let href = window.location.href
  let arr = href.split('/')
  let fileName = arr[arr.length - 1]  // 当前打开的文件

  // 其他tabbar清除class
  eleP.forEach(item => {
    item.className = ''
  })

  // 其他tabbar换为默认头像
  eleImg.forEach((item, index) => {
    item.setAttribute('src', `images/tabbar${index + 1}.png`)
  })

  // 点击其他按钮
  if (fileName !== 'index.html') {
    eleP[0].innerText = '首页'
  }

  // 点击首页
  if (fileName === 'index.html') {
    eleP[0].innerText = '猜我喜欢'
  }

  if (fileName === 'index.html') {
    setNameImg(0)
  } else if (fileName === 'list.html') {
    setNameImg(1)
  } else if (fileName === 'rank.html') {
    setNameImg(2)
  } else if (fileName === 'cart.html') {
    setNameImg(3)
  } else if (fileName === 'personal.html') {
    setNameImg(4)
  }
})()