/**
 * Created by simon on 2017/3/27.
 */


// your sring
import zh_CN from '../res/values/string.zh_CN'

export default class I18nKit {

  /**
   * 获取字符串
   * @param stringName
   * @param defaultValue
   * @returns {string}
   */
  static  getString(stringName: string, defaultValue?: string): string {
    return zh_CN[stringName] ? zh_CN[stringName] : defaultValue
  }
}

