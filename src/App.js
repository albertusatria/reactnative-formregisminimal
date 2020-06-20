import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Landingpage from './pages/Landingpage';
import Login from './pages/Login';
import {getStorage} from './component/SessionStorage';

const Stack = createStackNavigator();
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    getStorage('customertoken').then((response) => {
      console.log(response);
      if (response === null) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    });
  }, [isLogin]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landingpage"
          component={isLogin ? Home : Landingpage}
          options={{
            headerShown: isLogin ? true : false,
            title: isLogin ? 'The Apps' : null,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'The Apps'}}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
