/**
 * 判断是不是tablet
 * @return boolean
 */
import isAndroidTablet from './is-android-tablet'
import isBlackberryTablet from './is-blackberry-tablet'
import isWindowsTablet from './is-windows-tablet'
import isIpad from './is-ipad'

const isTablet = function () {
  return isAndroidTablet() || isBlackberryTablet() || isWindowsTablet() || isIpad()
}

export default isTablet
