
/*
//correct code 1-line 261
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from 'C:/Users/hp/quranmemorization/android/app/src/screens/WelcomeScreen';
import SignupScreen from 'C:/Users/hp/quranmemorization/android/app/src/screens/SignupScreen';
import LoginScreen from 'C:/Users/hp/quranmemorization/android/app/src/screens/LoginScreen';
import HomePage from 'C:/Users/hp/quranmemorization/android/app/src/screens/HomePage';
import SelectSurah from 'C:/Users/hp/quranmemorization/android/app/src/screens/SelectSurah';
import SelectPara from 'C:/Users/hp/quranmemorization/android/app/src/screens/SelectPara';
import Settings from 'C:/Users/hp/quranmemorization/android/app/src/screens/Settings';
import sixteenlineQuran from 'C:/Users/hp/quranmemorization/android/app/src/screens/sixteenlineQuran';

import Ale_Imran from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Ale_Imran';
import Anbiya from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Anbiya';
import Ankaboot from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Ankaboot';
import Araf from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Araf';
import Assajdah from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Assajdah';
import Bani_Israeel from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Bani_Israeel';
import Baqarah from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Baqarah';
import Balad from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Balad';
import Dhuha from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Dhuha';
import Dukhaan from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Dukhaan';
import Ekhaaf from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Ekhaaf';
import Fatah from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Fatah';
import Furqan from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Furqan';
import Ha_meem_Assajdah from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Ha_meem_Assajdah';
import Hadeed from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Hadeed';
import Hajj from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Hajj';
import Hashar from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Hashar';
import Hijr from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Hijr';
import Hud from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Hud';
import Hujraat from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Hujraat';
import Ibrahim from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Ibrahim';
import Inam from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Inam';
import Infaal from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Infaal';
import Jasia from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Jasia';
import Kahf from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Kahf';
import Luqman from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Luqman';
import Maidah from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Maidah';
import Mariyam from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Mariyam';
import Momin from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Momin';
import Mominoon from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Mominoon';
import Muhammad from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Muhammad';
import Mujadala from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Mujadala';
import Mumtahina from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Mumtahina';
import Nahl from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Nahl';
import Najam from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Najam';
import Naml from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Naml';
import Nisa from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Nisa';
import Noor from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Noor';
import Qaaf from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Qaaf';
import Qamar from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Qamar';
import Qasass from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Qasass';
import Raad from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Raad';
import Rehman from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Rehman';
import Room from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Room';
import Saaffaat from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Saaffaat';
import Saba from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Saba';
import Shooraa from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Shooraa';
import Suaad from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Suaad';
import Tahaa from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Tahaa';
import Tauba from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Tauba';
import Toor from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Toor';
import Waqiya from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Waqiya';
import Yasin from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Yasin';
import Yunus from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Yunus';
import Yusaf from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Yusaf';
import Zaariyaat from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Zaariyaat';
import Zukhruf from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Zukhruf';
import Zumur from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Zumur';
import Naas from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Naas';
import Fatiha from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Fatiha';
import Ahzaab from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Ahzaab';
import Aadiyaat from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Aadiyaat';
import Asar from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Asar';
import Alaq from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Alaq';
import Abas from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Abas';
import Aala from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Aala';
import Bayyaina from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Bayyaina';
import Burooj from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Burooj';
import Dahar from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Dahar';
import Faatir from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Faatir';
import Fajar from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Fajar';
import Falaq from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Falaq';
import Feel from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Feel';
import Ghashiya from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Ghashiya';
import Haaqqaa from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Haaqqaa';
import Humaza from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Humaza';
import Ikhlaas from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Ikhlaas';
import Infitaar from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Infitaar';
import Inshiqaaq from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Inshiqaaq';
import Jinn from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Jinn';
import Jumaa from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Jumaa';
import Kafiroon from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Kafiroon';
import Kausar from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Kausar';
import Lail from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Lail';
import Lahab from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Lahab';
import Maarijj from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Maarijj';
import Maoon from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Maoon';
import Mudassir from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Mudassir';
import Mulk from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Mulk';
import Munafiqoon from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Munafiqoon';
import Mursilaat from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Mursilaat';
import Mutafifeen from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Mutafifeen';
import Muzammil from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Muzammil';
import Naba from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Naba';
//import Naas from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Naas';
import Nasar from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Nasar';
import Naziaat from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Naziaat';
import Nooh from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Nooh';
import Qadar from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Qadar';
import Qalam from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Qalam';
import Qariya from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Qariya';
import Qiyama from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Qiyama';
import Quraish from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Quraish';
import Shams from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Shams';
//import Shooraa from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Shooraa';
//import Lahab from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Lahab';
import Taghabun from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Taghabun';
import Takasur from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Takasur';
import Tallaq from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Tallaq';
import Taqveer from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Taqveer';
import Tariq from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Tariq';
import Teen from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Teen';
import Tehreem from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Tehreem';
import Us_Shara from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Us_Shara';
import Zilzaal from 'C:/Users/hp/quranmemorization/android/app/src/screens/Surahs/Zilzaal';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Surah" component={SelectSurah} />
        <Stack.Screen name="Asar" component={Asar} />
        <Stack.Screen name="Alaq" component={Alaq} />
        <Stack.Screen name="Abas" component={Abas} />
        <Stack.Screen name="Bayyaina" component={Bayyaina} />
        <Stack.Screen name="Balad" component={Balad} />
        <Stack.Screen name="Dhuha" component={Dhuha} />
        <Stack.Screen name="Aala" component={Aala} />
        <Stack.Screen name="Burooj" component={Burooj} />
        <Stack.Screen name="Dahar" component={Dahar} />
        <Stack.Screen name="Faatir" component={Faatir} />
        <Stack.Screen name="Fajar" component={Fajar} />
        <Stack.Screen name="Falaq" component={Falaq} />
        <Stack.Screen name="Feel" component={Feel} />
        <Stack.Screen name="Ghashiya" component={Ghashiya} />
        <Stack.Screen name="Haaqqaa" component={Haaqqaa} />
        <Stack.Screen name="Humaza" component={Humaza} />
        <Stack.Screen name="Ikhlaas" component={Ikhlaas} />
        <Stack.Screen name="Infitaar" component={Infitaar} />
        <Stack.Screen name="Inshiqaaq" component={Inshiqaaq} />
        <Stack.Screen name="Mudassir" component={Mudassir} />
        <Stack.Screen name="Mulk" component={Mulk} />
        <Stack.Screen name="Munafiqoon" component={Munafiqoon} />
        <Stack.Screen name="Mursilaat" component={Mursilaat} />
        <Stack.Screen name="Mutafifeen" component={Mutafifeen} />
        <Stack.Screen name="Muzammil" component={Muzammil} />
        <Stack.Screen name="Naba" component={Naba} />
        <Stack.Screen name="Naas" component={Naas} />
        <Stack.Screen name="Nasar" component={Nasar} />
        <Stack.Screen name="Naziaat" component={Naziaat} />
        <Stack.Screen name="Nooh" component={Nooh} />
        <Stack.Screen name="Qadar" component={Qadar} />
        <Stack.Screen name="Qalam" component={Qalam} />
        <Stack.Screen name="Qariya" component={Qariya} />
        <Stack.Screen name="Qiyama" component={Qiyama} />
        <Stack.Screen name="Quraish" component={Quraish} />
        <Stack.Screen name="Shams" component={Shams} />
        <Stack.Screen name="Shooraa" component={Shooraa} />
        <Stack.Screen name="Lahab" component={Lahab} />
        <Stack.Screen name="Taghabun" component={Taghabun} />
        <Stack.Screen name="Takasur" component={Takasur} />
        <Stack.Screen name="Tallaq" component={Tallaq} />
        <Stack.Screen name="Tariq" component={Tariq} />
        <Stack.Screen name="Taqveer" component={Taqveer} />
        <Stack.Screen name="Teen" component={Teen} />
        <Stack.Screen name="Tehreem" component={Tehreem} />
        <Stack.Screen name="Us_Shara" component={Us_Shara} />
        <Stack.Screen name="Zilzaal" component={Zilzaal} />
        <Stack.Screen name="Jinn" component={Jinn} />
        <Stack.Screen name="Jumaa" component={Jumaa} />
        <Stack.Screen name="Kafiroon" component={Kafiroon} />
        <Stack.Screen name="Kausar" component={Kausar} />
        <Stack.Screen name="Lail" component={Lail} />
        <Stack.Screen name="Maarijj" component={Maarijj} />
        <Stack.Screen name="Maoon" component={Maoon} />
        <Stack.Screen name="Ahzaab" component={Ahzaab} />
        <Stack.Screen name="Suaad" component={Suaad} />
        <Stack.Screen name="Inam" component={Inam} />
        <Stack.Screen name="Baqarah" component={Baqarah} />
        <Stack.Screen name="Saba" component={Saba} />
        <Stack.Screen name="Saaffaat" component={Saaffaat} />
        <Stack.Screen name="Room" component={Room} />
        <Stack.Screen name="Rehman" component={Rehman} />
        <Stack.Screen name="Raad" component={Raad} />
        <Stack.Screen name="Qasass" component={Qasass} />
        <Stack.Screen name="Qamar" component={Qamar} />
        <Stack.Screen name="Qaaf" component={Qaaf} />
        <Stack.Screen name="Noor" component={Noor} />
        <Stack.Screen name="Nisa" component={Nisa} />
        <Stack.Screen name="Naml" component={Naml} />
        <Stack.Screen name="Najam" component={Najam} />
        <Stack.Screen name="Nahl" component={Nahl} />
        <Stack.Screen name="Tahaa" component={Tahaa} />
        <Stack.Screen name="Tauba" component={Tauba} />
        <Stack.Screen name="Fatiha" component={Fatiha} />
        <Stack.Screen name="Toor" component={Toor} />
        <Stack.Screen name="Waqiya" component={Waqiya} />
        <Stack.Screen name="Yasin" component={Yasin} />
        <Stack.Screen name="Yunus" component={Yunus} />
        <Stack.Screen name="Yusaf" component={Yusaf} />
        <Stack.Screen name="Zukhruf" component={Zukhruf} />
        <Stack.Screen name="Zumur" component={Zumur} />
        <Stack.Screen name="Mumtahina" component={Mumtahina} />
        <Stack.Screen name="Mujadala" component={Mujadala} />
        <Stack.Screen name="Muhammad" component={Muhammad} />
        <Stack.Screen name="Mominoon" component={Mominoon} />
        <Stack.Screen name="Mariyam" component={Mariyam} />
        <Stack.Screen name="Maidah" component={Maidah} />
        <Stack.Screen name="Luqman" component={Luqman} />
        <Stack.Screen name="Kahf" component={Kahf} />
        <Stack.Screen name="Jasia" component={Jasia} />
        <Stack.Screen name="Zaariyaat" component={Zaariyaat} />
        <Stack.Screen name="Momin" component={Momin} />
        <Stack.Screen name="Ibrahim" component={Ibrahim} />
        <Stack.Screen name="Hujraat" component={Hujraat} />
        <Stack.Screen name="Hud" component={Hud} />
        <Stack.Screen name="Hijr" component={Hijr} />
        <Stack.Screen name="Hashar" component={Hashar} />
        <Stack.Screen name="Hajj" component={Hajj} />
        <Stack.Screen name="Hadeed" component={Hadeed} />
        <Stack.Screen name="Furqan" component={Furqan} />
        <Stack.Screen name="Fatah" component={Fatah} />
        <Stack.Screen name="Dukhaan" component={Dukhaan} />
        <Stack.Screen name="Araf" component={Araf} />
        <Stack.Screen name="Ankaboot" component={Ankaboot} />
        <Stack.Screen name="Aadiyaat" component={Aadiyaat} />
        <Stack.Screen name="Anbiya" component={Anbiya} />
        <Stack.Screen name="Ekhaaf" component={Ekhaaf} />
        <Stack.Screen name="Infaal" component={Infaal} />
        <Stack.Screen name="Ale_Imran" component={Ale_Imran} />
        <Stack.Screen name="Assajdah" component={Assajdah} />
        <Stack.Screen name="Bani_Israeel" component={Bani_Israeel} />
        <Stack.Screen name="Ha_meem_Assajdah" component={Ha_meem_Assajdah} />
        <Stack.Screen name="Para" component={SelectPara} />
        <Stack.Screen name="Setting" component={Settings} />
        <Stack.Screen name="SixteenLineQuran" component={sixteenlineQuran} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
*/


/*    
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import quranData from 'C:/Users/hp/quranmemorization/android/app/src/main/assets/JsonFiles/Fatiha.json';

export default function App() {
  const [ayahIndex, setAyahIndex] = useState(null);
  const [showAyah, setShowAyah] = useState(true);
  const [countdown, setCountdown] = useState(5);
  const [recording, setRecording] = useState(null);
  const [recordedUri, setRecordedUri] = useState(null);
  const [showReveal, setShowReveal] = useState(false);

  const soundRef = useRef(null);

  const startSession = () => {
  setRecordedUri(null);
  setShowReveal(false);

  const verses = quranData[0]?.verses;

  if (!verses || !verses.length) {
    console.error('Verses not found in quranData:', quranData);
    return;
  }

  const index = Math.floor(Math.random() * verses.length);
  setAyahIndex(index);
  setShowAyah(true);
  setCountdown(5);
};

  useEffect(() => {
    if (countdown > 0 && showAyah) {
      const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
  setShowAyah(false); // Only hide the Ayah
}

  }, [countdown, showAyah]);

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);

      // Auto stop after 10 seconds
      setTimeout(() => stopRecording(), 10000);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    try {
      if (!recording) return;
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecordedUri(uri);
      setRecording(null);
      setShowReveal(true);
    } catch (err) {
      console.error('Failed to stop recording', err);
    }
  };

  const playRecording = async () => {
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
    }

    const { sound } = await Audio.Sound.createAsync({ uri: recordedUri });
    soundRef.current = sound;
    await sound.playAsync();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quran Recitation Practice</Text>

      {ayahIndex !== null && showAyah && (
        <>
          <Text style={styles.ayahText}>{quranData[0].verses[ayahIndex].text}</Text>

          <Text style={styles.countdown}>Hide in: {countdown}s</Text>
        </>
      )}

     {!showAyah && !recordedUri && (
  <>
    <Text style={styles.reciteText}>🎙️ Ready to record your recitation</Text>

    {!recording ? (
      <Button title="🔴 Start Recording" onPress={startRecording} />
    ) : (
      <Button title="⏹ Stop Recording" onPress={stopRecording} />
    )}
  </>
)}

      {recordedUri && (
        <>
          <Button title="▶️ Play Your Recitation" onPress={playRecording} />
          {showReveal && (
            <>
              <TouchableOpacity onPress={() => alert(quranData[0].verses[ayahIndex].text)}>
  <Text style={styles.reveal}>📖 Reveal Correct Ayah</Text>
</TouchableOpacity>

              <View style={styles.feedbackRow}>
                <Button title="✔ I got it right" onPress={startSession} />
                <Button title="✘ I missed it" onPress={startSession} />
              </View>
            </>
          )}
        </>
      )}

      {!recording && !recordedUri && (
        <Button title="🎯 Start Practice Session" onPress={startSession} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  ayahText: { fontSize: 28, textAlign: 'center', marginVertical: 20 },
  countdown: { fontSize: 18, color: 'gray' },
  reciteText: { fontSize: 20, color: 'green', marginVertical: 20 },
  reveal: { color: 'blue', fontSize: 18, marginVertical: 10 },
  feedbackRow: { flexDirection: 'row', gap: 10, marginTop: 20 },
});
*/

/*410-
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { useRoute } from '@react-navigation/native';


export default function ReciteSurah() {
  const route = useRoute();
  const { surahName } = route.params; // e.g., "Fatiha"
  const [quranData, setQuranData] = useState(null);
  const [ayahIndex, setAyahIndex] = useState(0);
  const [countdown, setCountdown] = useState(5);
  const [recording, setRecording] = useState(null);
  const [recordedUri, setRecordedUri] = useState(null);
  const [showReveal, setShowReveal] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    const loadSurah = async () => {
      try {
        const data = require(`C:/Users/hp/quranmemorization/android/app/src/main/assets/JsonFiles/${surahName}.json`);
        setQuranData(data[0]); // assuming format: [{name: "", verses: [...] }]
      } catch (error) {
        console.error('Failed to load Surah JSON:', error);
      }
    };
    loadSurah();
  }, [surahName]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);

      // Automatically stop after 30 seconds (or customize)
      setTimeout(() => stopRecording(), 30000);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    try {
      if (!recording) return;
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecordedUri(uri);
      setRecording(null);
      setShowReveal(true);
    } catch (err) {
      console.error('Failed to stop recording', err);
    }
  };

  const playRecording = async () => {
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
    }

    const { sound } = await Audio.Sound.createAsync({ uri: recordedUri });
    soundRef.current = sound;
    await sound.playAsync();
  };

  if (!quranData) return <Text>Loading Surah...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Surah: {quranData.name}</Text>

      {countdown > 0 && (
        <>
          <Text style={styles.ayahText}>Prepare to recite...</Text>
          <Text style={styles.countdown}>Countdown: {countdown}s</Text>
        </>
      )}

      {countdown === 0 && !recording && !recordedUri && (
        <>
          <Text style={styles.reciteText}>🎙️ Tap to start recording</Text>
          <Button title="🔴 Start Recording" onPress={startRecording} />
        </>
      )}

      {recording && (
        <Button title="⏹ Stop Recording" onPress={stopRecording} />
      )}

      {recordedUri && (
        <>
          <Button title="▶️ Play Your Recitation" onPress={playRecording} />
          {showReveal && (
            <>
              <TouchableOpacity onPress={() => alert(quranData.verses.map(v => v.text).join('\n'))}>
                <Text style={styles.reveal}>📖 Reveal Correct Surah</Text>
              </TouchableOpacity>
              <View style={styles.feedbackRow}>
                <Button title="✔ I got it right" onPress={() => {
                  setRecordedUri(null);
                  setCountdown(5);
                  setShowReveal(false);
                }} />
                <Button title="✘ I missed it" onPress={() => {
                  setRecordedUri(null);
                  setCountdown(5);
                  setShowReveal(false);
                }} />
              </View>
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  ayahText: { fontSize: 24, textAlign: 'center', marginVertical: 10 },
  countdown: { fontSize: 18, color: 'gray' },
  reciteText: { fontSize: 20, color: 'green', marginVertical: 20 },
  reveal: { color: 'blue', fontSize: 18, marginVertical: 10 },
  feedbackRow: { flexDirection: 'row', gap: 10, marginTop: 20 },
});
*/
    
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import quranData from 'C:/Users/hp/quranmemorization/android/app/src/main/assets/JsonFiles/Fatiha.json';

export default function App() {
  const [ayahIndex, setAyahIndex] = useState(null);
  const [showAyah, setShowAyah] = useState(true);
  const [countdown, setCountdown] = useState(5);
  const [recording, setRecording] = useState(null);
  const [recordedUri, setRecordedUri] = useState(null);
  const [showReveal, setShowReveal] = useState(false);

  const soundRef = useRef(null);

  const startSession = () => {
  setRecordedUri(null);
  setShowReveal(false);

  const verses = quranData[0]?.verses;

  if (!verses || !verses.length) {
    console.error('Verses not found in quranData:', quranData);
    return;
  }

  const index = Math.floor(Math.random() * verses.length);
  setAyahIndex(index);
  setShowAyah(true);
  setCountdown(5);
};

  useEffect(() => {
    if (countdown > 0 && showAyah) {
      const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
  setShowAyah(false); // Only hide the Ayah
}

  }, [countdown, showAyah]);

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);

      // Auto stop after 10 seconds
      setTimeout(() => stopRecording(), 10000);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    try {
      if (!recording) return;
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecordedUri(uri);
      setRecording(null);
      setShowReveal(true);
    } catch (err) {
      console.error('Failed to stop recording', err);
    }
  };

  const playRecording = async () => {
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
    }

    const { sound } = await Audio.Sound.createAsync({ uri: recordedUri });
    soundRef.current = sound;
    await sound.playAsync();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quran Recitation Practice</Text>

      {ayahIndex !== null && showAyah && (
        <>
          <Text style={styles.ayahText}>{quranData[0].verses[ayahIndex].text}</Text>

          <Text style={styles.countdown}>Hide in: {countdown}s</Text>
        </>
      )}

     {!showAyah && !recordedUri && (
  <>
    <Text style={styles.reciteText}>🎙️ Ready to record your recitation</Text>

    {!recording ? (
      <Button title="🔴 Start Recording" onPress={startRecording} />
    ) : (
      <Button title="⏹ Stop Recording" onPress={stopRecording} />
    )}
  </>
)}

      {recordedUri && (
        <>
          <Button title="▶️ Play Your Recitation" onPress={playRecording} />
          {showReveal && (
            <>
              <TouchableOpacity onPress={() => alert(quranData[0].verses[ayahIndex].text)}>
  <Text style={styles.reveal}>📖 Reveal Correct Ayah</Text>
</TouchableOpacity>

              <View style={styles.feedbackRow}>
                <Button title="✔ I got it right" onPress={startSession} />
                <Button title="✘ I missed it" onPress={startSession} />
              </View>
            </>
          )}
        </>
      )}

      {!recording && !recordedUri && (
        <Button title="🎯 Start Practice Session" onPress={startSession} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  ayahText: { fontSize: 28, textAlign: 'center', marginVertical: 20 },
  countdown: { fontSize: 18, color: 'gray' },
  reciteText: { fontSize: 20, color: 'green', marginVertical: 20 },
  reveal: { color: 'blue', fontSize: 18, marginVertical: 10 },
  feedbackRow: { flexDirection: 'row', gap: 10, marginTop: 20 },
});
