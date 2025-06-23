  
  import React,{useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safar ul Quran</Text>
      <Text style={styles.subtitle}>Journey of The Quran</Text>
      <Image source={require('C:/Users/hp/quranmemorization/android/app/src/main/assets/logo.png')} style={styles.logo} />
          <Text style={styles.arabicText}>سفر القرآن</Text>
      <Text style={styles.bismillah}>بسم الله الرحمن الرحيم</Text>
     <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf7e8',// '#BDBA9C'Light beige background
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006d5b', // Green
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#006d5b',//'#00796B', // Green
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  arabicText: {
    fontSize: 22,
    color: '#006D5B', // Green
    marginBottom: 8,
  },
  bismillah: {
    fontSize: 18,
    color: '#B9BBB6', // Light gray
    fontStyle: 'italic',
    marginBottom: 30,
  },
  getStartedText: {
    color:'#ffffff',
    backgroundColor: '#006d5b', // Green
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
});

export default WelcomeScreen;
