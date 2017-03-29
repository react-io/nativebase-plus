/**
 * Created by simon on 2017/3/23.
 */


import React, { Component } from 'react';

import { StyleSheet, Text, View, } from 'react-native';

import Plat from '../../utils/PlatformKit'

import { Button, ListItem } from 'native-base'

import Switch from 'react-native-switch-pro'

/**
 * 起始页
 */
export default class CustomerDataInputSettings extends Component {

  static propTypes = {
    itemName: React.PropTypes.string, // item 的名字
    switchCallBack: React.PropTypes.func, // switch 的值
    disabled: React.PropTypes.bool // 禁用
  }

  render() {
    return (
      <ListItem style={StyleSheet.flatten([styles.listitem])}>

        <View style={{ flex: 1 }}>
          <Text style={{ marginLeft: Plat.assignIt(15), fontSize: Plat.font(17) }}>
            {this.props.itemName}
          </Text>
        </View>

        <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: Plat.assignIt(15) }}>
          <Switch width={Plat.assignIt(51)}
                  height={Plat.assignIt(31)}
                  onSyncPress={value => this.props.switchCallBack(value)}/>
        </View>

      </ListItem>
    )
  }
}

const styles = {
  listitem: {
    backgroundColor: '#fff',
    marginLeft: 0,
    height: Plat.assignIt(49),
    paddingRight: 0
  },

  item_disabled: { // 禁用状态

  }
}
