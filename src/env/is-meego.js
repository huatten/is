/**
 * 判断是不是meego
 * @return boolean
 */
import { userAgent } from '../shared/constant'

const isMeego = function () {
  return /meego/.test(userAgent)
}

export default isMeego
