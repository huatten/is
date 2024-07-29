/**
 * 判断给定日期对象或者时间戳value是否是上个月时间
 * @param value Date Object or timestamp
 * @return boolean
 * @example
 *
 * const monday = new Date('01/26/2015')
 * isLastYear(monday)
 * // => false
 *
 * const sunday = new Date('01/25/2023');
 * isLastYear(sunday)
 * // => true
 *
 * const timestamp = 1719158400000; // new Date('06/24/2024')
 * isLastYear(timestamp)
 * // => false
 */
import isDate from '../type/is-date'
import isTimestamp from './is-timestamp'

const isLastYear = function (value) {
  if (!isDate(value) || !isTimestamp(value)) throw new Error(`isLastYear: params must be a Date Object or timestamp`)

  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''
  const now = new Date()

  const lastYear = now.getFullYear() - 1

  return date.getFullYear() === lastYear
}

export default isLastYear
