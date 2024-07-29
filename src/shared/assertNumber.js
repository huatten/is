import typeOf from './typeOf'
export default function assertNumber(inputValue, funName) {
  const isNumber = typeOf(inputValue) === 'number'

  if (!isNumber) {
    const invalidType = typeOf(inputValue)
    throw new TypeError(`${funName}: Expected a number but received a ${invalidType}`)
  }
}
