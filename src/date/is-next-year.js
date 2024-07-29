/**
 * 判断给定日期对象或者时间戳value是否是明年日期
 * @param value Date Object or timestamp
 * @return boolean
 * @example
 *
 * const monday = new Date('01/26/2029')
 * isNextYear(monday)
 * // => false
 *
 * const sunday = new Date('01/25/2025');
 * isNextYear(sunday)
 * // => true
 *
 * const timestamp = 1719158400000; // new Date('06/24/2024')
 * isNextYear(timestamp)
 * // => false
 */
import isDate from '../type/is-date'
import isTimestamp from './is-timestamp'

const isNextYear = function (value) {
  if (!isDate(value) || !isTimestamp(value)) throw new Error(`isNextYear: params must be a Date Object or timestamp`)

  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''
  const now = new Date()

  const nextYear = now.getFullYear() + 1

  return date.getFullYear() === nextYear
}

export default isNextYear
