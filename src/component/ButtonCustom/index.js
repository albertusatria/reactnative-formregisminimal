/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity, Text, Alert} from 'react-native';
import stylesLogin from '../../asset/style';

const ButtonCustom = ({type}) => {
  // eslint-disable-next-line no-sparse-arrays
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
