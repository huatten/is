export default function assertString(inputValue: any): void {
  // 检查输入是否是字符串或 String 类的实例
  const isString = typeof inputValue === 'string' || inputValue instanceof String
  // 如果输入不是字符串
  if (!isString) {
    let invalidType: string = typeof inputValue
    if (inputValue === null) {
      invalidType = 'null'
    } else if (invalidType === 'object') {
      invalidType = inputValue.constructor.name
    } else {
      // 抛出一个带有描述性消息的 TypeError 错误
      throw new TypeError(`Expected a string but received a ${invalidType}`)
    }
  }
}
