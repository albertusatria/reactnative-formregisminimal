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
  const callbackFirstLastName = (value) => {
    console.log(value.lastname);
  };
  return (
    <View>
      <SafeAreaView>
        <View>
          <ScrollView>
            <FirstLast callbackFirstLastName={callbackFirstLastName} />
            <ButtonCustom type="Register" />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
