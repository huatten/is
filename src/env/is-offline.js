/**
 * 判断设备是不是断网离线状态
 * @return boolean
 */
import isOnline from './is-online'

const isOffline = function () {
  return !isOnline()
}

export default isOffline
