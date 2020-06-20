import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import stylesLogin from '../../asset/style';
import {removeStorage} from '../../component/SessionStorage';

const Home = ({navigation}) => {
  const logout = () => {
    removeStorage('customertoken').then((response) => {
      console.log('Logout');
      //navigation('Home');
    });
  };
  return (
    <View>
      <SafeAreaView>
        <View>
          <ScrollView>
            <View>
              <Text>HOMEPAGE</Text>
              <Text>
                Fugiat in reprehenderit velit irure id deserunt. Cillum pariatur
                deserunt sunt in. Laboris tempor nisi id fugiat amet laboris
                occaecat Lorem pariatur aliquip. Fugiat consectetur duis quis
                quis ullamco adipisicing eiusmod. Ex ex ea duis eu. Tempor
                proident enim veniam amet reprehenderit labore nulla quis quis
                consequat esse culpa in Lorem. Laboris id ad reprehenderit nisi
                nostrud fugiat eu ex. Dolore nostrud pariatur enim et nisi nisi
                sint voluptate adipisicing in ad enim. Amet consequat id nulla
                ut amet do commodo fugiat consequat exercitation consequat dolor
                exercitation eiusmod. Sint enim mollit sunt fugiat exercitation
                in velit dolore mollit reprehenderit non qui in. Aliqua labore
                quis nisi labore dolore ad. Aute nostrud ad minim reprehenderit
                dolor incididunt cillum consectetur. Amet aliquip ex enim esse
                quis nulla. Ea mollit dolor tempor fugiat velit consectetur
                tempor commodo ex duis. Proident velit ullamco do do occaecat
                proident id voluptate proident nisi nostrud. Proident do ad est
                aliqua anim minim qui cillum qui ea qui Lorem laboris
                exercitation.
              </Text>
            </View>
            <View>
              <TouchableOpacity style={stylesLogin.btnSubmit} onPress={logout}>
                <Text style={stylesLogin.btnText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
