/**
 * 判断是不是android平板电脑
 * @return boolean
 */
import isAndroid from './is-android'
import { userAgent } from '../shared/constant'

const isAndroidTablet = function () {
  return isAndroid() && !/mobile/.test(userAgent)
}

export default isAndroidTablet
