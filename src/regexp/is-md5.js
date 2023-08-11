/**
 * 检查value是不是MD5哈希值
 * @param value
 * @return boolean
 * @example

 * isMD5('2ef7bde608ce5404e97d5f042f95f89f')
 * // => true
 *
 * isMD5('7b77e46d3af290b741eb6b00c66575ee')
 * // => true
 *
 * isMD5('2ef7bde608ce5404e97d5f042f95f89f0')
 * // => false
 */

const isMD5 = function (value) {
  const md5Pattern = /^[a-fA-F0-9]{32}$/
  return value && md5Pattern.test(value)
}

export default isMD5
