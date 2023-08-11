/**
 * 检查value是不是SHA-256哈希值
 * @param value
 * @return boolean
 * @example

 * isSHA256('7c4a8d09ca3762af61e59520943dc26494f8941b76f1ca92f32af61e5952094f')
 * // => true
 *
 * isSHA256('7b77e46d3af290b741eb6b00c66575ee')
 * // => false
 *
 * isSHA256('7b77e46d3af290b741eb6b00c66575ee8eae')
 * // => false
 */

const isSHA256 = function (value) {
  const sha256Pattern = /^[a-fA-F0-9]{64}$/
  return value && sha256Pattern.test(value)
}

export default isSHA256
