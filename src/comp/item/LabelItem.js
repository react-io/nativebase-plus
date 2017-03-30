/**
 * Created by simon on 2017/3/24.
 */

import React, { Component } from 'react';

import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { ListItem, } from 'native-base'
import Plat from "../../kit/PlatformKit";


/**
 * 起始页
 */
export default class LabelItem extends Component {

  static propTypes = {
    label: React.PropTypes.string, // item 的名字
    disabled: React.PropTypes.bool, // 禁用
    onClick: React.PropTypes.func,

    content: React.PropTypes.string, // 内容
    contentColor: React.PropTypes.string
  }

  render() {

    const customContent = {}
    _.assign(customContent,
      this.props.contentColor ? { color: this.props.contentColor } : {}
    )

    return (
      <TouchableHighlight onPress={this.props.onClick}>
        <ListItem style={StyleSheet.flatten([styles.listitem, this.props.style])}
                  onPress={this.props.onClick}>

          <View style={StyleSheet.flatten([styles.container_label])}>
            <Text style={{ fontSize: Plat.font(16), color: '#9A9A9A' }}>
              {this.props.label}
            </Text>
          </View>

          <View style={StyleSheet.flatten([styles.container_content])}>
            <Text style={StyleSheet.flatten([styles.text_content, customContent])}>
              {this.props.content}
            </Text>
          </View>

          <View style={StyleSheet.flatten([styles.container_right])}>
            {this.props.children}
          </View>
        </ListItem>
      </TouchableHighlight>
    )
  }
}


const styles = {
  listitem: {
    backgroundColor: '#fff',
    marginLeft: 0,
    height: Plat.assignIt(49),
    paddingRight: 0,
    flexDirection: 'row',
    minHeight: Plat.assignIt(49),
  },

  container_label: {
    width: Plat.assignIt(80),
    marginLeft: Plat.assignIt(14)
  },

  container_content: {
    alignItems: 'center'
  },
  text_content: {
    color: '#474747',
    fontSize: Plat.font(16)
  },


  container_right: {
    flex: 1,
    alignItems: 'flex-end'
  },
}
