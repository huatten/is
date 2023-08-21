/**
 * 判断是不是blackberry phone手机
 * @return boolean
 */
import isBlackberry from './is-blackberry'
import { userAgent } from '../shared/constant'

const isBlackberryPhone = function () {
  return isBlackberry() && /mobile/.test(userAgent)
}

export default isBlackberryPhone
