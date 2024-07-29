/**
 * 检查value是不是十六进制的颜色值
 * @param value
 * @return boolean
 * @example
 *
 * isHexColor('#333')
 * // => true
 *
 * isHexColor('#333333')
 * // => true
 *
 * isHexColor('#f90fff23')
 * // => true
 *
 * isHexColor('#f90fff23f')
 * // => false
 */
import assertString from '../shared/assertString'
const isHexColor = function (value) {
  assertString(value, 'isHexColor')
  const hexColor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i
  return value && hexColor.test(value)
}

export default isHexColor
