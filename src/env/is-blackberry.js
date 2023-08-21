/**
 * 判断是不是blackberry
 * @return boolean
 */
import { userAgent } from '../shared/constant'

const isBlackberry = function () {
  return /blackberry/.test(userAgent) || /bb10/.test(userAgent)
}

export default isBlackberry
