/**
 * 检查value是不是英文
 * @param value
 * @return boolean
 * @example
 *
 * isEnglish('helle world')
 * // => true
 *
 * isEnglish('j12k34')
 * // => false
 *
 * isEnglish('HH1122GG89I')
 * // => false
 */
import assertString from '../shared/assertString'
const isEnglish = function (value) {
  assertString(value, 'isEnglish')
  const englishRegex = /^[A-Za-z]+$/
  return value && englishRegex.test(value)
}

export default isEnglish
