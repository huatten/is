/**
 * 判断字符串是否是十六进制的颜色值
 * @param value
 */
const isHexColor = function (value: string): boolean {
  const hexColor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i
  return value && hexColor.test(value)
}

export default isHexColor
