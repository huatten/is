/**
 * 判断value是不是明天
 * @param value date | timestamp
 * @return boolean
 * @example
 *
 * const now = new Date()
 * const tomorrow = new Date(now.setDate(now.getDate() + 1))
 * isTomorrow(yesterday)
 * // => true
 *
 * const date = new Date()
 * isTomorrow(date)
 * // => false
 *
 * isYesterday(1693899912369)
 * // => true
 *
 * isTomorrow('1693899912369')
 * // => false
 */
import isTimestamp from './is-timestamp'
import isDate from '../type/is-date'

const isTomorrow = function (value) {
  const date = isDate(value) ? value : isTimestamp(value) ? new Date(value) : ''

  const now = new Date()
  const tomorrowString = new Date(now.setDate(now.getDate() + 1)).toDateString()
  return isDate(date) && date.toDateString() === tomorrowString
}

export default isTomorrow
