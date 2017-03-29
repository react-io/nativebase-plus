/**
 * Created by simon on 2017/3/18.
 */
import { Platform } from 'react-native'

export default class PlatformKit {

  static set(iosValue, AndroidValue) {
    return Platform.OS === 'ios' ? iosValue : AndroidValue
  }

  /**
   *
   * @param value sketch 上的文本的值
   */
  static assignIt(value: number) {
    const coefficient = 60.0 / 72
    return PlatformKit.set(value, coefficient * value)
  }


  /**
   * 字体设置
   * @param value
   */
  static font(value: number) {
    const iosCoefficient = 19 / 18.0
    const androidCoefficient = 1
    return PlatformKit.set(iosCoefficient * value, value * androidCoefficient)
  }
}

