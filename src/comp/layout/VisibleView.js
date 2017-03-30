/**
 * Created by simon on 2017/3/22.
 */


import React, { Component } from 'react';
import { View, } from 'react-native';
import * as _ from 'lodash'

/**
 * 是否可见的布局
 */
export default class VisibleView extends Component {

  static propTypes = {
    visible: React.PropTypes.bool,
    style: React.PropTypes.object
  }

  render() {
    const comp = !_.isNil(this.props.visible) && this.props.visible
      ? <View style={this.props.style}>{this.props.children}</View>
      : null

    return comp
  }
}
