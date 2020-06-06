/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, Platform, Text} from 'react-native';

import FirstLast from './component/FirstLast';
import ButtonCustom from './component/ButtonCustom';

const App = () => {
  const [firstname, setFirstname] = useState(Platform.OS === 'ios' ? '' : null);
  const [lastname, setLastname] = useState(Platform.OS === 'ios' ? '' : null);
  const callbackFirstLastName = (value) => {
    setFirstname(value.firstname);
    console.log(value.lastname);
  };
  return (
    <View>
      <SafeAreaView>
        <View>
          <ScrollView>
            <FirstLast callbackFirstLastName={callbackFirstLastName} />
            <ButtonCustom type="Register" />
            <Text>{firstname}</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
