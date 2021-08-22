/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import MyCom from './src';

import Config from 'react-native-config';

const App = () => {
  return (
    <>
      <View>
        <Text>{Config.API_URL}</Text>
      </View>
      <MyCom />
    </>
  );
};

export default App;
