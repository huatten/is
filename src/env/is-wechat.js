/**
 * 判断是不是微信浏览器
 * @return boolean
 */
import { userAgent } from '../shared/constant'

const isWechat = function () {
  return /micromessenger/.test(userAgent)
}

export default isWechat
