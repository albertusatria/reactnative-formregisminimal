/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
const App = () => {
  return (
    <View>
      <SafeAreaView>
        <View>
          <ScrollView>
            <View style={stylesLogin.wrapper}>
              <View style={stylesLogin.fieldControl}>
                <Text style={stylesLogin.label}>Username</Text>
                <TextInput
                  style={stylesLogin.input}
                  placeholder="e.g. johndoe"
                />
              </View>
              <View style={stylesLogin.fieldControl}>
                <Text style={stylesLogin.label}>Password</Text>
                <TextInput
                  style={stylesLogin.input}
                  placeholder="* * * * *"
                  autoCompleteType="off"
                  secureTextEntry
                />
              </View>
              <View>
                <TouchableOpacity style={stylesLogin.btnSubmit}>
                  <Text
                    style={stylesLogin.btnText}
                    onPress={() => Alert.alert('Login!')}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
