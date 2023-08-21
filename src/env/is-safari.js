/**
 * 判断是不是safari浏览器
 * @return boolean
 */
import { userAgent } from '../shared/constant'

const isSafari = function () {
  return /safari/i.test(userAgent) && !/chrome|edg|edge/.test(userAgent)
}

export default isSafari
