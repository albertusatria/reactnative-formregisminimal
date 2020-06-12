/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, Platform} from 'react-native';

import Activity from './component/Activity';
import ButtonCustom from './component/ButtonCustom';
import ListActivity from './component/ListActivity';

const App = () => {
  //   const [formdata, setFormdata] = useState(Platform.OS === 'ios' ? '' : null);
  const [formdata, setFormdata] = useState([]);
  const [datacallback, setDatacallback] = useState([]);

  const callbackFormActivities = (value) => {
    setDatacallback(value);
  };

  const callbackButton = (value) => {
    if (value) {
      let newSubmittedData = [...formdata];
      newSubmittedData.push(datacallback);
      setFormdata(newSubmittedData);
      //console.log(newSubmittedData);
    }
  };

  return (
    <View>
      <SafeAreaView>
        <View
          style={{
            margin: 10,
          }}>
          <ScrollView>
            <Activity callbackFormActivities={callbackFormActivities} />
            <ButtonCustom type="Add Task" callbackButton={callbackButton} />
          </ScrollView>
          <View
            style={{
              borderBottomColor: '#9a9a9a',
              borderBottomWidth: 1,
              margin: 20,
            }}
          />
          <ListActivity submittedData={formdata} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
