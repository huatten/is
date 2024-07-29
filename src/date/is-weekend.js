/**
 * 判断给定日期对象或者时间戳value是否是周末
 * @param value Date Object or timestamp
 * @return boolean
 * @example
 *
 * const monday = new Date('01/26/2015')
 * isWeekend(monday)
 * // => false
 *
 * const sunday = new Date('01/25/2015');
 * isWeekend(sunday)
 * // => true
 *
 * const timestamp = 1721750400000; // new Date('07/24/2024')
 * isWeekend(timestamp)
 * // => false
 */
import isDate from '../type/is-date'
import isTimestamp from './is-timestamp'

const isWeekend = function (value) {
  if (!isDate(value) || !isTimestamp(value)) throw new Error(`isWeekend: params must be a Date Object or timestamp`)

  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''

  const dayOfWeek = date?.getDay()
  return isDate(date) && (dayOfWeek === 0 || dayOfWeek === 6)
}

export default isWeekend
