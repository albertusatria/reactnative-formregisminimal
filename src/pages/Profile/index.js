import React from 'react';
import {Button, View, Text} from 'react-native';

const Profile = ({navigation}) => {
  //   console.log(navigation);
  return (
    <View>
      <Text>Profile Page</Text>
      <Button title="<< Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Profile;
