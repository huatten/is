/**
 * 判断是不是chrome浏览器
 * @return boolean
 */
import { vendor, userAgent } from '../shared/constant'

const isChrome = function () {
  return /google inc/.test(vendor) && /chrome/.test(userAgent) && !/edge|edg/.test(userAgent)
}

export default isChrome
