/**
 * 检查value是不是有效时间戳
 * @param value
 * @return boolean
 * @example
 *
 * isTimestamp(1628342400000)
 * // => true
 *
 * isTimestamp('1628342400000')
 * // => false
 */
const isTimestamp = function (value: number): boolean {
  return typeof value === 'number' && value > 0 && new Date(value).getTime() === value
}

export default isTimestamp
