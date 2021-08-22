import React from 'react';
import {Text, View} from 'react-native';
import {testFun} from './pages/test';
const MyCom = () => {
  testFun();
  return (
    <>
      <View>
        <Text>我的组件一</Text>
      </View>
    </>
  );
};
export default MyCom;
