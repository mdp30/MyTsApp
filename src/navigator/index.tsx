import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
// import Me from '../pages/Me';
type RootStackParamList = {
  Home: undefined;
  Me: undefined;
};
const Navigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Me" component={Me} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};
export default Navigator;
