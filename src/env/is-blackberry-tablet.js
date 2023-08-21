/**
 * 判断是不是blackberry tablet平板电脑
 * @return boolean
 */
import isBlackberry from './is-blackberry'
import { userAgent } from '../shared/constant'

const isBlackberryTablet = function () {
  return isBlackberry() && !/mobile/.test(userAgent)
}

export default isBlackberryTablet
