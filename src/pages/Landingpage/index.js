import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import stylesApp from '../../asset/style';

const Landingpage = ({navigation}) => {
  console.log('stacknya landingpage');
  return (
    <View style={stylesApp.landingpagewrapper}>
      <SafeAreaView>
        <View style={stylesApp.landingpage}>
          <View style={stylesApp.landingpageTitleWrapper}>
            <Text>LOGO</Text>
            <Text>
              Incididunt sunt laboris ipsum aliquip in elit nostrud laboris
              veniam.
            </Text>
          </View>
          <View style={stylesApp.buttonContainer}>
            <TouchableOpacity
              style={stylesApp.btnNavigate}
              onPress={() => navigation.navigate('Login')}>
              <Text style={stylesApp.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Landingpage;
