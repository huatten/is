/**
 * 判断是不是windows tablet平板电脑
 * @return boolean
 */
import { userAgent } from '../shared/constant'
import isWindows from './is-windows'
import isWindowsPhone from './is-windows-phone'

const isWindowsTablet = function () {
  return isWindows() && /touch/.test(userAgent) && !isWindowsPhone()
}

export default isWindowsTablet
