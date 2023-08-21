/**
 * 判断是不是mobile手机
 * @return boolean
 */
import isAndroidPhone from './is-android-phone'
import isBlackberryPhone from './is-blackberry-phone'
import isIphone from './is-iphone'
import isIpod from './is-ipod'
import isMeego from './is-meego'
import isWindowsPhone from './is-windows-phone'

const isMobile = function () {
  return isAndroidPhone() || isBlackberryPhone() || isIphone() || isIpod() || isMeego() || isWindowsPhone()
}

export default isMobile
