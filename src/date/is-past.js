/**
 * 判断给定日期对象或者时间戳value是否是过去日期
 * @param value Date Object or timestamp
 * @return boolean
 * @example
 *
 * const monday = new Date('01/26/2015')
 * isPast(sunday)(monday)
 * // => true
 *
 * const sunday = new Date('01/25/2015');
 * isPast(sunday)
 * // => true
 *
 * const timestamp = 1723651200000; // new Date('08/15/2024')
 * isPast(timestamp)
 * // => false
 */
import isDate from '../type/is-date'
import isTimestamp from './is-timestamp'

const isPast = function (value) {
  if (!isDate(value) || !isTimestamp(value)) throw new Error(`isPast: params must be a Date Object or timestamp`)
  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''

  const now = new Date()
  return now < date
}

export default isPast
