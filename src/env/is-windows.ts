/**
 * 判断是不是windows操作系统
 */
import { platform } from '../shared/constant'
const isWindows = function (): boolean {
  return /win/.test(platform)
}

export default isWindows
