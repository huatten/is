import typeOf from './typeOf'
export default function assertString(inputValue, funName) {
  const isString = typeOf(inputValue) === 'string'
  if (!isString) {
    const invalidType = typeOf(inputValue)
    throw new TypeError(`${funName}: Expected a string but received a ${invalidType}`)
  }
}
