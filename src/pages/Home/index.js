import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import stylesLogin from '../../asset/style';
import {gql} from 'apollo-boost';
import {mutate} from '../../services/graphql/api';
import AsyncStorage from '@react-native-community/async-storage';

const Home = ({navigation}) => {
  const [username, setUsername] = useState(Platform.OS === 'ios' ? '' : null);
  const [password, setPassword] = useState(Platform.OS === 'ios' ? '' : null);
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      // saving error
    }
  };
  const checkLocal = async () => {
    const value = await AsyncStorage.getItem('token');
    console.log(value);
  };
  const postLogin = () => {
    console.log('postLogin');
    let schema = gql`
      mutation generateCustomerTokenCustom(
        $email: String!
        $password: String!
      ) {
        generateCustomerTokenCustom(username: $email, password: $password) {
          token
        }
      }
    `;
    let querySent = {email: username, password: password};
    // console.log(username);
    mutate(schema, querySent).then((response) => {
      const {data} = response;
      const userData = data.generateCustomerTokenCustom;
      //   console.log(userData.token);
      storeData(userData.token);
    });
  };
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
                  onChangeText={(text) => setUsername(text)}
                />
              </View>
              <View style={stylesLogin.fieldControl}>
                <Text style={stylesLogin.label}>Password</Text>
                <TextInput
                  style={stylesLogin.input}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              <View>
                <TouchableOpacity
                  style={stylesLogin.btnSubmit}
                  onPress={postLogin}>
                  <Text style={stylesLogin.btnText}>Login</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={stylesLogin.btnSubmit}
                  onPress={checkLocal}>
                  <Text style={stylesLogin.btnText}>Check Local Storage</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
