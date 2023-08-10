/**
 * 检查value是不是12h时间 hh:mm:ss | hh:mm:ss.SSS
 * am、pm、AM、PM标识可选  hh:mm:ss am | hh:mm:ss AM | hh:mm:ss pm | hh:mm:ss PM
 * 毫秒部分可选 hh:mm:ss | hh:mm:ss.SSS
 *
 * @param value
 * @return boolean
 * @example
 *
 * hh:mm:ss
 * isTime12('12:34:56')
 * => true
 *
 * hh:mm:ss
 * isTime12('13:00:00')
 * => false
 *
 * hh:mm:ss.SSS
 * isTime12('12:34:56.789')
 * => true
 *
 * hh:mm:ss.SSS AM
 * isTime12('12:34:56.789 AM')
 * => true
 *
 * hh:mm:ss AM
 * isTime12('09:34:56 AM')
 * => true
 *
 * hh:mm:ss am
 * isTime12('09:34:56 am')
 * => true
 *
 * hh:mm:ss PM
 * isTime12('09:34:56 PM')
 * => true
 *
 * hh:mm:ss pm
 * isTime12('09:34:56 pm')
 * => true
 *
 * hh:mm:sspm
 * isTime12('09:34:56pm')
 * => false
 *
 * hh:mm:ssPm
 * isTime12('09:34:56Pm')
 * => false
 */
const isTime12 = function (value) {
  const timePattern = /^(?:0?[1-9]|1[0-2]):[0-5]\d:[0-5]\d(?:\.\d{3})?(?: (AM|am|PM|pm))?$/
  return typeof value === 'string' && timePattern.test(value)
}

export default isTime12
