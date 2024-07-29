/**
 * 判断给定日期对象或者时间戳value是否是下一周时间
 * @param value Date Object or timestamp
 * @return boolean
 * @example
 *
 * const monday = new Date('01/26/2015')
 * isNextWeek(monday)
 * // => false
 *
 * const date = new Date('07/10/2024');
 * isNextWeek(date)
 * // => false
 *
 * const timestamp = 1722268800000; // new Date('07/30/2024')
 * isNextWeek(timestamp)
 * // => true
 */
import isDate from '../type/is-date'
import isTimestamp from './is-timestamp'

const isNextWeek = function (value) {
  if (!isDate(value) || !isTimestamp(value)) throw new Error(`isNextWeek: params must be a Date Object or timestamp`)

  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''
  const now = new Date()

  // 计算当前周的第一天（假设星期一为一周的开始）
  const startOfCurrentWeek = new Date(now)
  const day = now.getDay() // 获取当前是星期几
  const diff = day >= 1 ? day - 1 : 6 // 计算与周一的差距
  startOfCurrentWeek.setDate(now.getDate() - diff)

  // 计算下一周的第一天和最后一天
  const startOfNextWeek = new Date(startOfCurrentWeek)
  startOfNextWeek.setDate(startOfCurrentWeek.getDate() + 7)

  const endOfNextWeek = new Date(startOfNextWeek)
  endOfNextWeek.setDate(startOfNextWeek.getDate() + 6)

  return date >= startOfNextWeek && date <= endOfNextWeek
}

export default isNextWeek
