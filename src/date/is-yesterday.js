/**
 * 判断value是不是昨天
 * @param value date | timestamp
 * @return boolean
 * @example
 *
 * const now = new Date()
 * const yesterday = new Date(now.setDate(now.getDate() - 1))
 * isYesterday(yesterday)
 * // => true
 *
 * const date = new Date()
 * isYesterday(date)
 * // => false
 *
 * isYesterday(1692630684039)
 * // => true
 *
 * isYesterday('1692630684039')
 * // => false
 */
import isTimestamp from './is-timestamp'
import isDate from '../type/is-date'

const isYesterday = function (value) {
  if (!isDate(value) || !isTimestamp(value)) throw new Error(`isYesterday: params must be a Date Object or timestamp`)

  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''

  const now = new Date()
  const yesterdayString = new Date(now.setDate(now.getDate() - 1)).toDateString()
  return isDate(date) && date.toDateString() === yesterdayString
}

export default isYesterday
