/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import globleStyles from '../common/globleStyles';
import { colors } from '../common/theme';

class InputCard extends Component {
  render() {
    const { onChangeText, blurOnSubmit, maxLength, label, value, returnKey, placeholder,
      keyboardType, children, multiline, secureEntry, inputRef, onSubmitEditing, rightIcon, onPressRightIcon, textInputStyle, cardInputStyle } = this.props;

    return (<>
      {label && <Text style={[inputCardStyle.inputCardItemLabel, globleStyles.fontSemiBold]}>{label}</Text>}
      <View style={[inputCardStyle.inputCardItem, cardInputStyle]}>
        {children}
        <View style={{ flex: 1, }}>
          <View style={inputCardStyle.inputCardItemInputCont}>
            <TextInput
              underlineColorAndroid="transparent"
              onChangeText={onChangeText}
              value={value}
              autoCapitalize="none"
              autoCorrect={false}
              ref={inputRef}
              maxLength={maxLength}
              multiline={multiline}
              blurOnSubmit={blurOnSubmit}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKey}
              secureTextEntry={secureEntry}
              keyboardType={keyboardType}
              placeholder={placeholder}
              textAlignVertical={"top"}
              placeholderTextColor={colors.GREY_5}
              style={[inputCardStyle.inputCardInput, globleStyles.fontReg, textInputStyle, multiline ? inputCardStyle.textArea : null]} />
          </View>
        </View>
        <TouchableOpacity onPress={onPressRightIcon} style={{ marginRight: 10 }}>
          {rightIcon}
        </TouchableOpacity>
      </View>
    </>

    )
  }
}

const inputCardStyle = StyleSheet.create({
  inputCardItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginHorizontal: 0,
    borderWidth: 1,
    borderColor: colors.GREY_4,
    borderRadius: 5,
    paddingLeft: 10
  },
  // inputCardIcon: {
  //   width: 20,
  //   height: 20,
  //   marginHorizontal: 15,
  //   marginVertical: 7,
  //   resizeMode: "contain"
  // },
  inputCardItemLabel: {
    fontSize: 14,
    paddingBottom: 5,
    color: colors.BLACK,
    textTransform:'capitalize'
  },
  inputCardInput: {
    // marginTop: 5,
    paddingBottom: 2,
    fontSize: 16,
    width: "100%",
    color: colors.BLACK,
    height: Platform.OS == 'ios' ? 35 : 45,
    paddingLeft: 10,
    textAlignVertical: 'center',
    // backgroundColor:'red'
  },
  textArea: {
    height: 150,
    textAlign: 'auto',
    textAlignVertical: 'top',
    paddingVertical: 5
  }
})

export { InputCard };
