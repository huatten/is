/**
 * 检查value是不是HTML片段
 * @param value
 * @return boolean
 * @example
 *
 * isHtml('<div>Content</div>')
 * // => true
 *
 * isHtml('<br/>')
 * // => true
 *
 * isHtml('<tag></other>')
 * // => false
 */
import assertString from '../shared/assertString'
const isHtml = function (value) {
  assertString(value, 'isHtml')
  const htmlFragmentRegex = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>| *\/>)/i
  return value && htmlFragmentRegex.test(value)
}

export default isHtml
