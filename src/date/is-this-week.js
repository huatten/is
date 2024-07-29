/**
 * 判断给定日期对象或者时间戳value是否是本周时间
 * @param value Date Object or timestamp
 * @return boolean
 * @example
 *
 * const monday = new Date('01/26/2015')
 * isThisWeek(monday)
 * // => false
 *
 * const sunday = new Date('01/25/2015');
 * isThisWeek(sunday)
 * // => false
 *
 * const timestamp = 1721750400000; // new Date('07/24/2024')
 * isThisWeek(timestamp)
 * // => true
 */
import isDate from '../type/is-date'
import isTimestamp from './is-timestamp'

const isThisWeek = function (value) {
  if (!isDate(value) || !isTimestamp(value)) throw new Error(`isThisWeek: params must be a Date Object or timestamp`)

  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''
  const now = new Date()

  const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()))
  const endOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 6))

  return date >= startOfWeek && date <= endOfWeek
}

export default isThisWeek
