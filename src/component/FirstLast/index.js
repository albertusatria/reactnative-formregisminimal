/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import stylesLogin from '../../asset/style';

const FirstLast = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  return (
    <View>
      <View style={stylesLogin.fieldControl}>
        <Text style={stylesLogin.label}>First Name</Text>
        <TextInput
          style={stylesLogin.input}
          placeholder="e.g. johndoe"
          onChangeText={(text) => setFirstname(text)}
        />
      </View>
      <View style={stylesLogin.fieldControl}>
        <Text style={stylesLogin.label}>Last Name</Text>
        <TextInput
          style={stylesLogin.input}
          placeholder="e.g. .Jr"
          onChangeText={(text) => setLastname(text)}
        />
      </View>
      <Text>Firstname: {firstname}</Text>
      <Text>Lastname: {lastname}</Text>
    </View>
  );
};

export default FirstLast;
