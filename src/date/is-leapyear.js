/**
 * 检查value是不是闰年
 * 年份能被4整除且不能被100整除或者年份能被400整除
 *
 * @param value
 * @return boolean
 * @example
 *
 * isLeapYear(2020)
 * // => true
 *
 * isLeapYear('2020')
 * // => true
 *
 * isLeapYear('2020年')
 * // => false
 *
 * isLeapYear(2021)
 * // => false
 *
 * isLeapYear(1900)
 * // => false
 *
 */
const isLeapYear = function (value) {
  const isYear = /^[1-9]\d{3}$/.test(value)
  const year = parseInt(value, 10)
  if (!isYear || Number.isNaN(year)) return false
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

export default isLeapYear
