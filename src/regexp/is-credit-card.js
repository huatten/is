/**
 * 检查value是不是有效的信用卡号码
 * @param value
 * @return boolean
 * @example
 *
 * isCreditCard('4532015112830366')
 * // => true
 *
 * isCreditCard('4532-0151-1283-0366')
 * // => true
 *
 * isCreditCard('1234567890123456')
 * // => false
 */
import assertString from '../shared/assertString'
const isCreditCard = function (value) {
  assertString(value, 'isCreditCard')
  // Remove spaces and hyphens
  const sanitized = value.replace(/[-\s]/g, '')
  
  // Basic pattern for credit card numbers (13-19 digits)
  if (!/^\d{13,19}$/.test(sanitized)) {
    return false
  }
  
  // Luhn algorithm for credit card validation
  let sum = 0
  let isEven = false
  
  // Loop through values starting at the rightmost side
  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized.charAt(i), 10)
    
    if (isEven) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }
    
    sum += digit
    isEven = !isEven
  }
  
  return sum % 10 === 0
}

export default isCreditCard