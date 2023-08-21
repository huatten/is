/**
 * 判断是不是windows phone手机
 * @return boolean
 */
import isWindows from './is-windows'
import { userAgent } from '../shared/constant'

const isWindowsPhone = function () {
  return isWindows() && /phone/.test(userAgent)
}

export default isWindowsPhone
