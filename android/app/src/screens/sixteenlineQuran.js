import React from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Import your images
const images = [
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page1.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page2.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page3.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page4.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page5.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page6.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page7.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page8.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page9.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page10.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page11.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page12.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page13.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page14.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page15.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page16.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page17.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page18.png'),
  require('C:/Users/hp/quranmemorization/android/app/src/main/assets/images/page19.png'),
];

const SixteenLineQuran = () => {
  
  // Render each image item
  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item} style={styles.image} resizeMode="contain" />
    </View>
  );

  return (
    <View style={styles.container}>
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      horizontal={false} // Set true if you want horizontal scrolling
      showsVerticalScrollIndicator={false}
    />
    </View>
  );
};

export default SixteenLineQuran;

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf7e8',
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.95, // 95% of screen width
    height: height * 0.8, // 80% of screen height
    borderRadius: 10,
  },
});
