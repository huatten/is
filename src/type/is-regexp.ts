/**
 * 判断是不是Regexp
 * @param value
 */
import typeOf from '../shared/typeOf'
const isRegexp = function (value: object): boolean {
  return typeof value === 'object' && typeOf(value) === 'regexp'
}

export default isRegexp
