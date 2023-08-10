import isDate from '../type/is-date'
/**
 * 判断是不是今天
 * @param date
 */
const isToday = function (date) {
  let now = new Date()
  let todayString = now.toDateString()
  return isDate(date) && date.toDateString() === todayString
}

export default isToday
