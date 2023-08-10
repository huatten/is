/**
 * 判断是不是linux操作系统
 * @return boolean
 */
import { platform } from '../shared/constant'
const isLinux = function () {
  return /linux/.test(platform)
}

export default isLinux
