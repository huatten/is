/**
 * 判断是不是opera浏览器
 * @return boolean
 */
import { userAgent } from '../shared/constant'

const isOpera = function () {
  return /opera/i.test(userAgent)
}

export default isOpera
