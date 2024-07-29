/**
 * 判断给定日期对象或者时间戳value是否是上一周时间
 * @param value Date Object or timestamp
 * @return boolean
 * @example
 *
 * const monday = new Date('01/26/2015')
 * isLastWeek(monday)
 * // => false
 *
 * const date = new Date('07/10/2024');
 * isLastWeek(date)
 * // => false
 *
 * const timestamp = 1720972800000; // new Date('07/15/2024')
 * isLastWeek(timestamp)
 * // => true
 */
import isDate from '../type/is-date'
import isTimestamp from './is-timestamp'

const isLastWeek = function (value) {
  if (!isDate(value) || !isTimestamp(value)) throw new Error(`isLastWeek: params must be a Date Object or timestamp`)

  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''
  const now = new Date()

  // 计算当前周的第一天（假设星期一为一周的开始）
  const startOfCurrentWeek = new Date(now)
  const day = now.getDay() // 获取当前是星期几
  const diff = day >= 1 ? day - 1 : 6 // 计算与周一的差距
  startOfCurrentWeek.setDate(now.getDate() - diff)

  // 计算上一周的第一天和最后一天
  const startOfLastWeek = new Date(startOfCurrentWeek)
  startOfLastWeek.setDate(startOfCurrentWeek.getDate() - 7)
  const endOfLastWeek = new Date(startOfCurrentWeek)
  endOfLastWeek.setDate(startOfCurrentWeek.getDate() - 1)

  return date >= startOfLastWeek && date <= endOfLastWeek
}

export default isLastWeek
