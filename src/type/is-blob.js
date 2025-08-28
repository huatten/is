/**
 * 检查value是不是Blob对象
 * @param value
 * @return boolean
 * @example
 *
 * isBlob(new Blob())
 * // => true
 *
 * isBlob(new File([], 'test.txt'))
 * // => true
 *
 * isBlob({})
 * // => false
 */
const isBlob = function (value) {
  return value instanceof Blob
}

export default isBlob
