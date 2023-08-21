/**
 * 判断是不是ios
 * @return boolean
 */
import isIphone from './is-iphone'
import isIpod from './is-ipod'
import isIpad from './is-ipad'

const isIos = function () {
  return isIphone() || isIpod() || isIpad()
}

export default isIos
