/**
 * 检查value是不是24h时间 HH:mm:ss
 * 毫秒部分可选 HH:mm:ss.SSS
 *
 * @param value
 * @return boolean
 * @example
 *
 * isTime24('09:30:45')
 * // => true
 *
 * isTime24('14:15:00')
 * // => true
 *
 * isTime24('23:59:59.999')
 * // => true
 *
 * isTime24('24:00:00')
 * // => false
 *
 * isTime24('00:00:00.123')
 * // => true
 */
import assertString from '../shared/assertString'

const isTime24 = function (value) {
  assertString(value, 'isTime24')
  const timePattern = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d{3})?$/
  return value && timePattern.test(value)
}

export default isTime24
