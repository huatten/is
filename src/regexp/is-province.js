/**
 * 检查value是不是省份
 * @param value
 * @return boolean
 * @example
 *
 * isProvince('甘肃')
 * // => true
 *
 * isProvince('张掖')
 * // => false
 *
 * isProvince('东京')
 * // => false
 */
import assertString from '../shared/assertString'
const isProvince = function (value) {
  assertString(value, 'isProvince')
  const provinceRegex =
    /^(北京|天津|上海|重庆|河北|山西|辽宁|吉林|黑龙江|江苏|浙江|安徽|福建|江西|山东|河南|湖北|湖南|广东|海南|四川|贵州|云南|陕西|甘肃|青海|台湾|内蒙古|广西|西藏|宁夏|新疆|香港|澳门)$/
  return value && provinceRegex.test(value)
}

export default isProvince
