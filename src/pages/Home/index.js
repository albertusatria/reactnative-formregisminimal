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
import {FlatList} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const logout = () => {
    removeStorage('customertoken').then((response) => {
      console.log('Logout');
    });
    navigation.navigate('Landingpage');
  };

  const ItemList = ({title}) => {
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  };

  // eslint-disable-next-line no-sparse-arrays
  const notifications = [
    {
      __typename: 'DataNotification',
      content: 'Template is not found',
      entityId: 0,
      subject: 'Title #1',
      unread: false,
    },
    {
      __typename: 'DataNotification',
      content: 'Template is not found',
      entityId: 1,
      subject: 'Title #2',
      unread: false,
    },
    {
      __typename: 'DataNotification',
      content: 'Template is not found',
      entityId: 2,
      subject: 'Title #3',
      unread: false,
    },
  ];

  const listNotification = () => {
    return (
      <FlatList
        data={notifications}
        renderItem={({item}) => <ItemList title={item.subject} />}
        keyExtractor={(item) => item.entityId}
      />
    );
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
                quis ullamco adipisicing eiusmod.
              </Text>
              <ScrollView>{listNotification()}</ScrollView>
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
