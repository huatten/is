/**
 * 判断是不是linux操作系统
 */
import { platform } from '../shared/constant'
const isLinux = function (): boolean {
  return /linux/.test(platform)
}

export default isLinux
