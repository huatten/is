/**
 * 判断是不是edge浏览器
 * @return boolean
 */
import { vendor, userAgent } from '../shared/constant'

const isEdge = function () {
  return /google inc/.test(vendor) && /edge|edg/.test(userAgent)
}

export default isEdge
