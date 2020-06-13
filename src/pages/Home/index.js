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

const Home = ({navigation}) => {
  const [username, setUsername] = useState(Platform.OS === 'ios' ? '' : null);
  const [password, setPassword] = useState(Platform.OS === 'ios' ? '' : null);
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
    let querySent = {email: 'tomo@icube.us', password: 'Admin123'};
    //let querySent = {email: username, password: password};
    console.log(username);
    mutate(schema, querySent).then((response) => {
      const {data} = response;
      const userData = data.generateCustomerTokenCustom;
      console.log(userData.token);
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
                <TextInput onChange={(text) => setUsername(text)} />
              </View>
              <View style={stylesLogin.fieldControl}>
                <Text style={stylesLogin.label}>Password</Text>
                <TextInput onChange={(text) => setPassword(text)} />
              </View>
              <View>
                <TouchableOpacity
                  style={stylesLogin.btnSubmit}
                  onPress={postLogin}>
                  <Text style={stylesLogin.btnText}>Login</Text>
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
