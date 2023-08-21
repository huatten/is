/**
 * 判断是不是iphone手机
 * @return boolean
 */
import { userAgent } from '../shared/constant'

const isIphone = function () {
  return /iphone/.test(userAgent)
}

export default isIphone
