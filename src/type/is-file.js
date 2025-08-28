/**
 * 检查value是不是File对象
 * @param value
 * @return boolean
 * @example
 *
 * isFile(new File([], 'test.txt'))
 * // => true
 *
 * isFile(new Blob())
 * // => false
 *
 * isFile({})
 * // => false
 */
const isFile = function (value) {
  return value instanceof File
}

export default isFile
