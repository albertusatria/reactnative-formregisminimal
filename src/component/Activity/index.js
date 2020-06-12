/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import stylesLogin from '../../asset/style';

const Activity = ({callbackFormActivities}) => {
  const [activity, setActivity] = useState({
    todo: 'do something',
    status: 'retired',
  });

  useEffect(() => {
    callbackFormActivities(activity);
  });

  return (
    <View>
      <View style={stylesLogin.fieldControl}>
        <Text style={stylesLogin.label}>Activity</Text>
        <TextInput
          style={stylesLogin.input}
          placeholder="e.g. singing, driving, diving"
          onChangeText={(text) => [
            setActivity({todo: text, status: activity.status}),
            callbackFormActivities(activity),
          ]}
        />
      </View>
      <View style={stylesLogin.fieldControl}>
        <Text style={stylesLogin.label}>Status</Text>
        <TextInput
          style={stylesLogin.input}
          placeholder="e.g. retired, start to play"
          onChangeText={(text) => [
            setActivity({todo: activity.todo, status: text}),
            callbackFormActivities(activity),
          ]}
        />
      </View>
    </View>
  );
};

export default Activity;
