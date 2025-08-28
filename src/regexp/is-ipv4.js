/**
 * 检查value是不是有效的IPv4地址
 * @param value
 * @return boolean
 * @example
 *
 * isIPv4('192.168.1.1')
 * // => true
 *
 * isIPv4('255.255.255.255')
 * // => true
 *
 * isIPv4('256.1.1.1')
 * // => false
 *
 * isIPv4('2001:0db8:85a3:0000:0000:8a2e:0370:7334')
 * // => false
 */
import assertString from '../shared/assertString'
const isIPv4 = function (value) {
  assertString(value, 'isIPv4')
  const ipv4Pattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  return ipv4Pattern.test(value)
}

export default isIPv4
