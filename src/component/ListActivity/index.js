/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import stylesLogin from '../../asset/style';

const ListActivity = ({submittedData}) => {
  let Content;

  if (submittedData.length) {
    const activitiesData = [];
    submittedData.map((activity, index) => {
      activitiesData.push(
        <View style={stylesLogin.itemActivityContainer}>
          <Text style={stylesLogin.itemActivity}>
            <Text style={stylesLogin.itemActivityStatus}>
              [{activity.status}]
            </Text>{' '}
            <Text style={stylesLogin.itemActivityTodo}>{activity.todo}</Text>
          </Text>
        </View>,
      );
    });
    Content = () => {
      return <View>{activitiesData}</View>;
    };
  } else {
    Content = () => {
      return (
        <Text style={stylesLogin.itemActivityNotFound}>
          Data Aktifitas Belum Tersedia{' '}
        </Text>
      );
    };
  }

  return (
    <View>
      <Text style={stylesLogin.headings}>Activity List</Text>
      <Content />
    </View>
  );
};

export default ListActivity;
