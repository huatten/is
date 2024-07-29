/**
 * 判断给定日期对象或者时间戳value是否是周中
 * @param value Date Object or timestamp
 * @return boolean
 * @example
 *
 * const monday = new Date('01/26/2015')
 * isWeekday(monday)
 * // => true
 *
 * const sunday = new Date('01/25/2015');
 * isWeekday(sunday)
 * // => false
 *
 * const timestamp = 1721750400000; // new Date('07/24/2024')
 * isWeekday(timestamp)
 * // => true
 */
import isDate from '../type/is-date'
import isTimestamp from './is-timestamp'

const isWeekday = function (value) {
  if (!isDate(value) || !isTimestamp(value)) throw new Error(`isWeekday: params must be a Date Object or timestamp`)

  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''

  const dayOfWeek = date?.getDay()
  return isDate(date) && dayOfWeek >= 1 && dayOfWeek <= 5
}

export default isWeekday
