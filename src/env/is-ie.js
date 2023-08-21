/**
 * 判断是不是ie浏览器
 * @return boolean
 */
import { userAgent } from '../shared/constant'

const isIE = function () {
  return /trident/.test(userAgent) || /msie/.test(userAgent)
}

export default isIE
