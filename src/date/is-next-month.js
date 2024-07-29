/**
 * 判断给定日期对象或者时间戳value是否是下个月时间
 * @param value Date Object or timestamp
 * @return boolean
 * @example
 *
 * const monday = new Date('01/26/2015')
 * isNextMonth(monday)
 * // => false
 *
 * const sunday = new Date('01/25/2015');
 * isNextMonth(sunday)
 * // => false
 *
 * const timestamp = 1724428800000; // new Date('08/24/2024')
 * isNextMonth(timestamp)
 * // => true
 */
import isDate from '../type/is-date'
import isTimestamp from './is-timestamp'

const isNextMonth = function (value) {
  if (!isDate(value) || !isTimestamp(value)) throw new Error(`isNextMonth: params must be a Date Object or timestamp`)

  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''
  const now = new Date()

  // 获取当前的年份和月份
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth() // 月份从0开始，0代表一月

  // 计算下个月的年份和月份
  let nextMonth = currentMonth + 1
  let nextMonthYear = currentYear
  if (nextMonth > 11) {
    // 如果月份超过12月，则年份增加
    nextMonth = 0
    nextMonthYear++
  }

  return date.getFullYear() === nextMonthYear && date.getMonth() === nextMonth
}

export default isNextMonth
