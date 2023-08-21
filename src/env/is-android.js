/**
 * 判断是不是android操作系统
 * @return boolean
 */
import { userAgent } from '../shared/constant'

const isAndroid = function () {
  return /android/.test(userAgent)
}

export default isAndroid
