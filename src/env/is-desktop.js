/**
 * 判断是不是desktop桌面操作系统
 * @return boolean
 */
import isMobile from './is-mobile'
import isTablet from './is-tablet'

const isDesktop = function () {
  return !isMobile() && !isTablet()
}

export default isDesktop
