/**
 * 类型判断
 * @param value
 */
export default function typeOf(value: any): string {
  const rawObject = Object.prototype.toString.call(value).toLowerCase()

  const typeOfRegex = /\[object (.*)]/g
  const type = typeOfRegex.exec(rawObject)[1]

  return type
}
