/**
 * 判断设备是不是联网在线状态
 * @return boolean
 */
import { navigator } from '../shared/constant'

const isOnline = function () {
  return !navigator || navigator.onLine === true
}

export default isOnline
