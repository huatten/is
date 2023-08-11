/**
 * 检查value是不是URL
 * @param value
 * @return boolean
 * @example

 * isURL('https://www.example.com')
 * // => true
 *
 * isURL('https://example.com/page')
 * // => true
 *
 * isURL('https://beta.theb.ai')
 * // => true
 *
 * isURL('http://www.example.com')
 * // => true
 *
 * isURL('http://example.com/page')
 * // => true
 *
 * isURL('www.example.com')
 * // => true
 *
 * isURL('www.example.com/page')
 * // => true
 *
 * isURL('example.com')
 * // => true
 *
 * isURL('example.com/page')
 * // => true
 */
const isURL = function (value) {
  const urlPattern = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/
  return value && urlPattern.test(value)
}

export default isURL
