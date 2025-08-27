/**
 * 检查value是不是有效的邮政编码
 * @param value
 * @param locale - 可选的地区参数 (如 'US', 'CA', 'UK' 等)
 * @return boolean
 * @example
 *
 * isPostalCode('12345', 'US')
 * // => true
 *
 * isPostalCode('12345-6789', 'US')
 * // => true
 *
 * isPostalCode('M5V 3L9', 'CA')
 * // => true
 *
 * isPostalCode('SW1A 1AA', 'UK')
 * // => true
 *
 * isPostalCode('12345')
 * // => true (通用邮政编码格式)
 */
import assertString from '../shared/assertString'
const isPostalCode = function (value, locale) {
  assertString(value, 'isPostalCode')
  
  // Define postal code patterns for different locales
  const patterns = {
    US: /^(\d{5})(-\d{4})?$/,
    CA: /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/,
    UK: /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i,
    DE: /^\d{5}$/,
    FR: /^\d{5}$/,
    IT: /^\d{5}$/,
    AU: /^\d{4}$/,
    NL: /^\d{4}[A-Z]{2}$/,
    ES: /^\d{5}$/,
    PT: /^\d{4}-\d{3}$/,
    CH: /^\d{4}$/,
    AT: /^\d{4}$/,
    BE: /^\d{4}$/,
    SE: /^\d{3} ?\d{2}$/,
    NO: /^\d{4}$/,
    DK: /^\d{4}$/,
    FI: /^\d{5}$/,
    JP: /^\d{3}-\d{4}$/,
    CN: /^\d{6}$/,
    IN: /^\d{6}$/,
    BR: /^\d{5}-?\d{3}$/
  }
  
  // If locale is specified, use the corresponding pattern
  if (locale && patterns[locale]) {
    return patterns[locale].test(value)
  }
  
  // If no locale specified, check against common patterns
  for (const key in patterns) {
    if (patterns[key].test(value)) {
      return true
    }
  }
  
  return false
}

export default isPostalCode