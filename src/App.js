/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import stylesLogin from '../src/asset/style';
import FirstLast from './component/FirstLast';
import ButtonCustom from './component/ButtonCustom';

const App = () => {
  return (
    <View>
      <SafeAreaView>
        <View>
          <ScrollView>
            <FirstLast />
            <ButtonCustom type="Register" />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
