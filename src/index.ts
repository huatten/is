import isColor from './is-color'
import isFunction from './is-function'

export const is = {
  color: () => isColor,
  function: () => isFunction,
}

export { isColor, isFunction }

export default is
