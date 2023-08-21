/**
 * 判断是不是android手机
 * @return boolean
 */
import isAndroid from './is-android'
import { userAgent } from '../shared/constant'

const isAndroidPhone = function () {
  return isAndroid() && /mobile/.test(userAgent)
}

export default isAndroidPhone
