/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import globleStyles from '../common/globleStyles';
import { Ionicons } from 'react-native-vector-icons';
import { colors } from '../common/theme';
import { Switch } from 'native-base';


export default function DrawerItem(props) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={{ flex: 1 }}>
        <View style={globleStyles.drawerItemContainer}>
          <Ionicons name={props.iconname} color={colors.PRIMARY_DARK} size={25} />
          <Text style={[globleStyles.drawerItemText]}>{props.label}</Text>
        </View>
      </TouchableOpacity>
      {props.switch && <Switch size="md" />}
    </View>
  )
};

