/**
 * Created by simon on 2017/3/24.
 */


import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import { Button } from 'native-base'

import BaseComponent from './BaseComponent'
import Plat from "../../kit/PlatformKit";

/**
 * TextButton
 */
export default class TextButton extends BaseComponent {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    buttonColor: React.PropTypes.string,
    onPress: React.PropTypes.func,

    text: React.PropTypes.string,
    textSize: React.PropTypes.number,
    textColor: React.PropTypes.string,
  }

  render() {

    const customText = {}
    _.assign(customText,
      this.props.textColor ? { color: this.props.textColor } : {},
      this.props.textSize ? { fontSize: this.props.textSize } : {},
    )

    const customBtn = {}
    _.assign(customBtn,
      this.props.width ? { width: this.props.width } : {},
      this.props.height ? { height: this.props.height } : {},
      this.props.buttonColor ? { backgroundColor: this.props.buttonColor } : {}
    )

    return (
      <Button style={StyleSheet.flatten([styles.btn, customBtn])}
              onPress={this.props.onPress}>
        <Text style={StyleSheet.flatten([styles.text, customText])}>
          {this.props.text}
        </Text>
      </Button>
    )
  }
}

const styles = {
  btn: {
    width: Plat.assignIt(150),
    height: Plat.assignIt(46),
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white'
  }
}
