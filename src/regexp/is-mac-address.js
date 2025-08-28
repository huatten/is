/**
 * 检查value是不是有效的MAC地址
 * @param value
 * @return boolean
 * @example
 *
 * isMACAddress('00:11:22:33:44:55')
 * // => true
 *
 * isMACAddress('00-11-22-33-44-55')
 * // => true
 *
 * isMACAddress('0011.2233.4455')
 * // => true
 *
 * isMACAddress('00:11:22:33:44')
 * // => false
 */
import assertString from '../shared/assertString'
const isMACAddress = function (value) {
  assertString(value, 'isMACAddress')
  const macAddressPatterns = [
    /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/, // 00:11:22:33:44:55 or 00-11-22-33-44-55
    /^([0-9A-Fa-f]{4}[.]){2}([0-9A-Fa-f]{4})$/, // 0011.2233.4455
    /^([0-9A-Fa-f]{12})$/, // 001122334455
  ]

  return macAddressPatterns.some((pattern) => pattern.test(value))
}

export default isMACAddress
