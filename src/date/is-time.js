/**
 * 检查value是不是12h(hh:mm:ss)或者24h(HH:mm:ss)时间
 * 12h制时 am、pm、AM、PM标识可选  hh:mm:ss am | hh:mm:ss AM | hh:mm:ss pm | hh:mm:ss PM
 * 毫秒部分可选 (hh:mm:ss:SSS || HH:mm:ss.SSS)
 * @param value
 * @return boolean
 * @example
 *
 * isTime('12:34:56')
 * // => true
 *
 * isTime('23:59:00.123')
 * // => true
 *
 * isTime('00:00:00.000')
 * // => true
 *
 * isTime('00:00:00.12')
 * // => false
 *
 * isTime('25:00:00.999')
 * // => false
 *
 * isTime('00:00:00.')
 * // => false
 */
import isTime12 from './is-time12'
import isTime24 from './is-time24'
import assertString from '../shared/assertString'

const isTime = function (value) {
  assertString(value, 'isTime')
  return isTime12(value) || isTime24(value)
}

export default isTime
