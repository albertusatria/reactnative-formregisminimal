/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';

import FirstLast from './component/FirstLast';
import ButtonCustom from './component/ButtonCustom';

const App = () => {
  const callbackParent = (value) => {
    console.log(value);
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
      </SafeAreaView>
    </View>
  );
};

export default App;
