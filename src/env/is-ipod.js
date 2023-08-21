/**
 * 判断是不是ipod
 * @return boolean
 */
import { userAgent } from '../shared/constant'

const isIpod = function () {
  return /ipod/.test(userAgent)
}

export default isIpod
