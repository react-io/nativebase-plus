/**
 * Created by simon on 2017/3/20.
 */

import React from 'react';

import { View } from 'react-native';



/**
 * 水平居中布局
 */
export default class HorizontalCenterView extends BaseComponent {
  render() {
    return (
      <View style={{ ...styles.container, ...this.props.style }}>
        {this.props.children}
      </View>
    )
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
}
