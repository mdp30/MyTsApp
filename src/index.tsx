import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {WebView} from 'react-native-webview';

import {testFun} from './pages/test';
const MyCom = () => {
  const [name, setName] = useState('请输入用户名');
  // testFun();

  const onChangeText = (text: string) => {
    console.log('text', text);

    setName(text);
  };
  /**
   * 样式
   */
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'steelblue',
    },
    title: {
      color: '#fff',
    },
    inputName: {
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
    },
    text: {
      fontSize: 42,
    },
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>社书</Text>
        <TextInput
          style={styles.inputName}
          value={name}
          onChangeText={text => onChangeText(text)}
        />
        <Text>{name}</Text>
        <WebView
          source={{
            uri: 'https://sheshu.blockoor.com/h5/activity/f9e9e44da12a837f',
          }}
        />
      </View>
    </>
  );
};
export default MyCom;
