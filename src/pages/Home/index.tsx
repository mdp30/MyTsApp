/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
// import {WebView} from 'react-native-webview';

import SsArtilce from '../../components/SsArticle';
const Home = () => {
  const [artilce_list, setArtilce_list] = useState([]);
  // testFun();
  useEffect(() => {
    getListAsync();
  }, []);

  const getListAsync = () => {
    fetch(
      'http://8.129.85.111:50020/api/core/v1/topic_articles?topic_name=%E7%8F%A0%E6%B5%B7%E6%9C%80%E5%80%BC%E5%BE%97%E5%8E%BB%E7%9A%84%E6%99%AF%E7%82%B9&topic_id=124&nav_item_id=2&page=1&page_size=10&keyword=&city_id=8',
    )
      .then(response => response.json())
      .then(resJson => {
        setArtilce_list(resJson.data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <SsArtilce article={item.item} />
      </View>
    );
  };
  /**
   * 样式
   */
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EDEDED',
      justifyContent: 'center',
    },
    item: {},
  });

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList data={artilce_list} renderItem={renderItem} />
      </SafeAreaView>
    </>
  );
};
export default Home;
