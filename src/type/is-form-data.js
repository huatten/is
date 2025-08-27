/**
 * 检查value是不是FormData对象
 * @param value
 * @return boolean
 * @example
 *
 * isFormData(new FormData())
 * // => true
 *
 * isFormData({})
 * // => false
 */
const isFormData = function (value) {
  return value instanceof FormData
}

export default isFormData