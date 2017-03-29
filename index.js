import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import BaseComponent from './BaseComponent'

export default class Divider extends BaseComponent {
  static propTypes = {
    height: React.PropTypes.number,
    color: React.PropTypes.string,
    width: React.PropTypes.number
  }

  render() {
    const height = this.props.height
    const color = this.props.color

    const customDivider = {}
    _.assign(customDivider,
      height ? { height: height } : {},
      color ? { backgroundColor: color } : {},
      this.props.width ? { width: this.props.width } : {}
    )

    return (
      <View style={StyleSheet.flatten([styles.divider, customDivider, this.props.style])}/>
    )
  }
}

const styles = {
  divider: {
    backgroundColor: '#D5D5D5',
    height: 0.5
  }
}
