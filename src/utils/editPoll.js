import FastClick from 'fastclick'
// const $ = window.$
// 点击延迟 因为和编辑器冲突, 重制起原型方法needsClick
const deviceIsWindowsPhone = navigator.userAgent.indexOf('Windows Phone') >= 0
const deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone
FastClick.prototype.needsClick = function (target) {
  // 下面这句
  // 这是jq写法
  // if ($(target).parents('.needsclick').length) return true
  while (target.tagName !== 'BODY') {
    // 放在本地插件库, 请将includes换成indexOf判断
    console.log(target.parentNode.parentNode.className);
    if (target.parentNode.parentNode.className.indexOf('needsclick'))
      return true
    target = target.parent
  }

  switch (target.nodeName.toLowerCase()) {
    // Don't send a synthetic click to disabled inputs (issue #62)
    case 'button':
    case 'select':
    case 'textarea':
      if (target.disabled) {
        return true
      }

      break
    case 'input':

      // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
      if ((deviceIsIOS && target.type === 'file') || target.disabled) {
        return true
      }

      break
    case 'label':
    case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
    case 'video':
      return true
  }

  return (/\bneedsclick\b/).test(target.className)
}
FastClick.attach(document.body)
