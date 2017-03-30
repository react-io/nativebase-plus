/**
 * Created by simon on 2017/3/20.
 */


import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Button } from 'native-base'

import Plat from "../../../kit/PlatformKit"
import BaseComponent from './BaseComponent'

export default class Tag extends BaseComponent {
  static propTypes = {
    name: React.PropTypes.string
  }

  render() {
    const tagName = this.props.name

    return (
      <View>
        <Button style={StyleSheet.flatten([styles.btn_tag, this.props.style])}>
          <Text>{tagName}</Text>
        </Button>
      </View>
    )
  }
}

const styles = {
  btn_tag: {
    height: 28, // default size

    borderWidth: Plat.assignIt(0.5),
    borderColor: '#848484',  // default
    borderRadius: 14,

    backgroundColor: '#F6F6F6', // default background color
  }
};
