/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';

import FirstLast from './component/FirstLast';
import ButtonCustom from './component/ButtonCustom';

const App = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const callbackParent = (value) => {
    console.log(value);
    setFirstname(value);
  };
  return (
    <View>
      <SafeAreaView>
        <View>
          <ScrollView>
            <FirstLast callback={callbackParent} />
            <ButtonCustom type="Register" />
          </ScrollView>
        </View>
        <Text>{firstname}</Text>
      </SafeAreaView>
    </View>
  );
};

export default App;
