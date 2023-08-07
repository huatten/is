import isColor from './is-color'
import isFunction from './is-function'

export const is = {
  color: (value: string): boolean => isColor(value),
  function: (value: any): boolean => isFunction(value),
}

export { isColor, isFunction }

export default is
