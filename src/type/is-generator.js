/**
 * 检查value是不是Generator函数
 * @param value
 * @return boolean
 * @example
 *
 * isGenerator(function* () {})
 * // => true
 *
 * isGenerator(function* generatorFn() {})
 * // => true
 *
 * isGenerator(() => {})
 * // => false
 *
 * isGenerator(function () {})
 * // => false
 */
const isGenerator = function (value) {
  return value && typeof value === 'function' && value.constructor.name === 'GeneratorFunction'
}

export default isGenerator
