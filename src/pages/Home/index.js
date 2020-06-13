import React from 'react';
import {Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <Button
      title="Go to John's profile"
      onPress={() => navigation.navigate('Profile', {name: 'John'})}
    />
  );
};

export default Home;
