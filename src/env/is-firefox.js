/**
 * 判断是不是firefox浏览器
 * @return boolean
 */
import { userAgent } from '../shared/constant'

const isFirefox = function () {
  return /firefox/.test(userAgent)
}

export default isFirefox
