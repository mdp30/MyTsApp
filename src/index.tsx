import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Alert, Button} from 'react-native';
// import {WebView} from 'react-native-webview';

import {testFun} from './pages/test';
const MyCom = () => {
  const [name, setName] = useState('请输入用户名');
  // testFun();

  const onChangeText = (text: string) => {
    console.log('text', text);

    setName(text);
  };
  const createButtonAlert = () => {
    Alert.alert('标题', '这里是提示', [
      {
        text: '取消',
        onPress: () => console.log('点击取消'),
        style: 'cancel',
      },
      {
        text: '确定',
        onPress: () => console.log('ok'),
      },
    ]);
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
        {/* <WebView
          source={{
            uri: 'https://sheshu.blockoor.com/h5/activity/f9e9e44da12a837f',
          }}
        /> */}
        <Button title={'弹窗'} onPress={createButtonAlert} />
      </View>
    </>
  );
};
export default MyCom;
