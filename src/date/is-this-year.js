/**
 * 判断给定日期对象或者时间戳value是否是今年的时间
 * @param value Date Object or timestamp
 * @return boolean
 * @example
 *
 * const monday = new Date('01/26/2015')
 * isThisYear(monday)
 * // => false
 *
 * const sunday = new Date('01/25/2015');
 * isThisYear(sunday)
 * // => false
 *
 * const timestamp = 1721750400000; // new Date('07/24/2024')
 * isThisYear(timestamp)
 * // => true
 */
import isDate from '../type/is-date'
import isTimestamp from './is-timestamp'

const isThisYear = function (value) {
  if (!isDate(value) || !isTimestamp(value)) throw new Error(`isThisYear: params must be a Date Object or timestamp`)

  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''
  const now = new Date()

  return date.getFullYear() === now.getFullYear()
}

export default isThisYear
