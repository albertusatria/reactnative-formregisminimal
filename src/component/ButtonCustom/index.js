/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import stylesLogin from '../../asset/style';

const ButtonCustom = ({type}) => {
  return [
    <TouchableOpacity style={stylesLogin.btnSubmit}>
      <Text style={stylesLogin.btnText} onPress={() => Alert.alert('Login!')}>
        {type}
      </Text>
    </TouchableOpacity>,
    ,
  ];
};

export default ButtonCustom;
