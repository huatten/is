/**
 * 判断给定日期对象或者时间戳value是否是上个月时间
 * @param value Date Object or timestamp
 * @return boolean
 * @example
 *
 * const monday = new Date('01/26/2015')
 * isLastMonth(monday)
 * // => false
 *
 * const sunday = new Date('01/25/2015');
 * isLastMonth(sunday)
 * // => false
 *
 * const timestamp = 1719158400000; // new Date('06/24/2024')
 * isLastMonth(timestamp)
 * // => true
 */
import isDate from '../type/is-date'
import isTimestamp from './is-timestamp'

const isLastMonth = function (value) {
  if (!isDate(value) || !isTimestamp(value)) throw new Error(`isLastMonth: params must be a Date Object or timestamp`)

  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''
  const now = new Date()

  const lastMonth = now.getMonth() - 1
  const lastMonthYear = lastMonth < 0 ? now.getFullYear() - 1 : now.getFullYear()

  return date.getMonth() === (lastMonth + 12) % 12 && date.getFullYear() === lastMonthYear
}

export default isLastMonth
