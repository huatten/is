/**
 * 判断是不是windows操作系统
 * @return boolean
 */
import { platform } from '../shared/constant'

const isWindows = function () {
  return /win/.test(platform)
}

export default isWindows
