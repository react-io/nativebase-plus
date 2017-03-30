/**
 * Created by simon on 2017/3/23.
 */
import React, { Component } from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { ListItem } from 'native-base'
import Plat from "../../kit/PlatformKit";


/**
 * 起始页
 */
export default class MoreItem extends Component {

  static propTypes = {
    itemName: React.PropTypes.string, // item 的名字
    disabled: React.PropTypes.bool, // 禁用
    onClick: React.PropTypes.func
  }

  render() {
    return (
      <ListItem style={StyleSheet.flatten([styles.listitem, this.props.style])}
                onPress={this.props.onClick}>
        <View style={{ flex: 1 }}>
          <Text style={{ marginLeft: Plat.assignIt(14), fontSize: Plat.font(17) }}>
            {this.props.itemName}
          </Text>
        </View>

        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Image style={StyleSheet.flatten([styles.image_rightArrow])}
                 source={require('../../support/image/more_row.png')}/>
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

  image_rightArrow: {
    marginRight: Plat.assignIt(18.79)
  }
}
