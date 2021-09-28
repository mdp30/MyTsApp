import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const SsArtilce = (props: {article: any}) => {
  const {article} = props;

  const {img_info} = article;
  const styles = StyleSheet.create({
    container: {
      width: 343,
      backgroundColor: '#fff',
      borderRadius: 12,
      marginBottom: 10,
    },
    swiper: {},
    img: {
      width: 312,
      height: 234,
    },
  });
  return (
    <>
      <View style={styles.container}>
        <Swiper
          style={styles.swiper}
          height={312}
          horizontal={true}
          showsButtons={false}>
          {img_info.map((item: any, index: number) => {
            return (
              <Image key={index} source={{uri: item.url}} style={styles.img} />
            );
          })}
        </Swiper>
      </View>
    </>
  );
};
export default SsArtilce;
