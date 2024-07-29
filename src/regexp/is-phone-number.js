/**
 * 检查value是不是电话号码 宽松检测 只要是13,14,15,16,17,18,19开头即可
 * @param value
 * @return boolean
 * @example
 *
 * isPhoneNumber(17888809008)
 * // => true
 *
 * isPhoneNumber(11888809008)
 * // => false
 *
 * isPhoneNumber(12990897657)
 * // => false
 *
 * isPhoneNumber(109089887676)
 * // => false
 */
const isPhoneNumber = function (value) {
  const honeNumber = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
  return value && honeNumber.test(value)
}

export default isPhoneNumber
