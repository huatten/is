/**
 * 检查value是不是SHA-256哈希值
 * @param value
 * @return boolean
 * @example

 * isSHA256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08')
 * // => true
 *
 * isSHA256('9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08')
 * // => true
 *
 * isSHA256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a0z')
 * // => false 包含非法字符
 * 
 * isSHA256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a')
 * // => false 长度不足
 */
import assertString from '../shared/assertString'
const isSHA256 = function (value) {
  assertString(value, 'isSHA256')
  const sha256Pattern = /^[a-fA-F0-9]{64}$/
  return value && sha256Pattern.test(value)
}

export default isSHA256
