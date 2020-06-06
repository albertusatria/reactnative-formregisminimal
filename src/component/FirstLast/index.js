/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, TextInput} from 'react-native';
import stylesLogin from '../../asset/style';

const FirstLast = ({callbackFirstLastName}) => {
  let dataParent = {
    firstname: '',
    lastname: '',
  };
  return (
    <View>
      <View style={stylesLogin.fieldControl}>
        <Text style={stylesLogin.label}>First Name</Text>
        <TextInput
          style={stylesLogin.input}
          placeholder="e.g. johndoe"
          onChangeText={(text) => [
            (dataParent.firstname = text),
            callbackFirstLastName(dataParent),
          ]}
        />
      </View>
      <View style={stylesLogin.fieldControl}>
        <Text style={stylesLogin.label}>Last Name</Text>
        <TextInput
          style={stylesLogin.input}
          placeholder="e.g. .Jr"
          onChangeText={(text) => [
            (dataParent.lastname = text),
            callbackFirstLastName(dataParent),
          ]}
        />
      </View>
    </View>
  );
};

export default FirstLast;
