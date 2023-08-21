/**
 * 判断是不是mac操作系统
 * @return boolean
 */
import { platform } from '../shared/constant'

const isMac = function () {
  return /mac/.test(platform)
}

export default isMac
