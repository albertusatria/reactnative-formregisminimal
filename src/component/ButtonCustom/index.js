/* eslint-disable no-sparse-arrays */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import stylesLogin from '../../asset/style';

const ButtonCustom = ({type, callbackButton}) => {
  const isButtonPressed = () => {
    callbackButton(true);
  };
  return (
    <View>
      <TouchableOpacity style={stylesLogin.btnSubmit} onPress={isButtonPressed}>
        <Text style={stylesLogin.btnText}>{type}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonCustom;
