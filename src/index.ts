import isString from './lib/is-string'
import isNumber from './lib/is-number'
import isBoolean from './lib/is-boolean'
import isFunction from './lib/is-function'
import isArray from './lib/is-array'
import isNan from './lib/is-nan'
import isHexColor from './lib/is-hexColor'

export const is = {
  string: (value: string): boolean => isString(value),
  number: (value: number): boolean => isNumber(value),
  function: (value: any): boolean => isFunction(value),
  array: (value: []): boolean => isArray(value),
  boolean: (value: boolean): boolean => isBoolean(value),
  nan: (value: number): boolean => isNan(value),
  hexColor: (value: string): boolean => isHexColor(value),
}

export { isString, isNumber, isBoolean, isFunction, isArray, isNan, isHexColor }

export default is
