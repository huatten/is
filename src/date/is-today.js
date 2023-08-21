/**
 * 判断value是不是今天
 * @param value date | timestamp
 * @return boolean
 * @example
 *
 * const date = new Date()
 * isToday(date)
 * // => true
 *
 * isToday(1692630684039)
 * // => true
 *
 * isToday('1692630684039')
 * // => false
 *
 * isToday(1691610084039)
 * // => false
 */
import isTimestamp from './is-timestamp'
import isDate from '../type/is-date'

const isToday = function (value) {
  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''

  let now = new Date()
  let todayString = now.toDateString()
  return isDate(date) && date.toDateString() === todayString
}

export default isToday
