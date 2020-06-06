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

  const callbackParentFirst = (value) => {
    console.log(value);
    setFirstname(value);
  };
  const callbackParentLast = (value) => {
    console.log(value);
    setLastname(value);
  };
  return (
    <View>
      <SafeAreaView>
        <View>
          <ScrollView>
            <FirstLast
              callbackFirstName={callbackParentFirst}
              callbackLastName={callbackParentLast}
            />
            <ButtonCustom type="Register" />
          </ScrollView>
        </View>
        <Text>{firstname}</Text>
        <Text>{lastname}</Text>
      </SafeAreaView>
    </View>
  );
};

export default App;
