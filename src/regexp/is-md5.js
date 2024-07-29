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
 * isMD5('d41d8cd98f00b204e9800998ecf8427z')
 * // => false 包含非法字符
 * 
 * isMD5('2ef7bde608ce5404e97d5f04f89f0')
 * // => false 长度不足
 */

import assertString from '../shared/assertString'
const isMD5 = function (value) {
  assertString(value, 'isMD5')
  const md5Pattern = /^[a-fA-F0-9]{32}$/
  return value && md5Pattern.test(value)
}

export default isMD5
