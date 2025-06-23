// SelectSurah.js
import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SelectSurahTest() {
  const navigation = useNavigation();

  const handleSurahSelect = (surahName) => {
    navigation.navigate('ReciteSurah', { surahName }); // example: 'Fatiha'
  };

  return (
    <View>
      <Button title="Surah Al-Fatiha" onPress={() => handleSurahSelect('Fatiha')} />
      <Button title="Surah Ikhlas" onPress={() => handleSurahSelect('Ikhlas')} />
    </View>
  );
}
