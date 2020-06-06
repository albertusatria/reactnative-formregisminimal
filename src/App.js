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
const App = () => {
  const [total, setTotal] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // kalo ada perubahan state ditangkep sama useEffect()
  // ga bisa dipake di class Component
  useEffect(() => {
    setTotal(3);
  }, []);
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
                  onChangeText={(text) => setUsername(text)}
                />
              </View>
              <View style={stylesLogin.fieldControl}>
                <Text style={stylesLogin.label}>Password</Text>
                <TextInput
                  style={stylesLogin.input}
                  placeholder="* * * * *"
                  autoCompleteType="off"
                  secureTextEntry
                  onChangeText={(text) => setPassword(text)}
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
              <Text>{total}</Text>
              <Text>Username: {username}</Text>
              <Text>Password: {password}</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
