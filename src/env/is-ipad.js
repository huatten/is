/**
 * 判断是不是ipad
 * @return boolean
 */
import { navigator, platform, userAgent } from '../shared/constant'

const isIpad = function () {
  const iPadOS13Up = /mac/.test(platform) && navigator.maxTouchPoints > 1
  return /ipad/.test(userAgent) || iPadOS13Up
}

export default isIpad
