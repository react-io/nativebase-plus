/**
 * Created by simon on 2017/3/15.
 */

import React, { Component } from 'react';
import I18nKit from "../kit/I18nKit";

export default class BaseComponent extends Component {

  /**
   * 获取字符串
   * @param stringName
   * @param defaultValue
   * @returns {string}
   */
  getString(stringName: string, defaultValue?: string): string {
    return I18nKit.getString(stringName, defaultValue)
  }

  /**
   * 获取样式
   *
   * @param styleName
   */
  getStyle(styleName): string {
    return this.props[styleName] ? this.props[styleName] : null
  }

  /**
   * 简单导航
   * @param name
   */
  navigate(name: string) {
    const { navigate } = this.props.navigation;
    navigate(name)
  }
}
