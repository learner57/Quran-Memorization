
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const timings = [
  { ayah: 1, start: 0, end: 5000 },
  { ayah: 2, start: 5000, end: 10000 },
  { ayah: 3, start: 10000, end: 15000 },
  // Add all Ayah timings here
];

const ayahs = [
  { ayah: 1, text: 'In the name of Allah, the Most Gracious, the Most Merciful.' },
  { ayah: 2, text: 'Praise be to Allah, the Lord of the Worlds.' },
  { ayah: 3, text: 'The Most Gracious, the Most Merciful.' },
  // Add corresponding Ayah texts here
];

export default function QuranAudioPlayer() {
  const [sound, setSound] = useState(null);
  const [currentAyah, setCurrentAyah] = useState(null);
  const soundRef = useRef(null);

  // Path to your local audio file
  const audioFile = require('C:/Users/hp/quranmemorization/android/app/src/main/assets/audio/fatiha.mp3'); // adjust path

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const playAudio = async () => {
    const { sound: playbackObject } = await Audio.Sound.createAsync(
      audioFile,
      { shouldPlay: true }
    );

    soundRef.current = playbackObject;

    playbackObject.setOnPlaybackStatusUpdate((status) => {
      if (!status.isLoaded) return;

      if (status.isPlaying) {
        // Current playback position in milliseconds
        const position = status.positionMillis;

        // Find which Ayah is currently playing
        const playingAyah = timings.find(
          (t) => position >= t.start && position < t.end
        );

        if (playingAyah) {
          setCurrentAyah(playingAyah.ayah);
        } else {
          setCurrentAyah(null);
        }
      }

      if (status.didJustFinish) {
        setCurrentAyah(null);
      }
    });

    setSound(playbackObject);
  };

  const stopAudio = async () => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
      soundRef.current = null;
      setCurrentAyah(null);
    }
  };

  const renderItem = ({ item }) => (
    <Text
      style={[
        styles.ayahText,
        item.ayah === currentAyah ? styles.highlight : null,
      ]}
    >
      {item.ayah}. {item.text}
    </Text>
  );

  return (
    <View style={styles.container}>
      <Button title="Play Surah" onPress={playAudio} />
      <Button title="Stop" onPress={stopAudio} />

      <FlatList
        data={ayahs}
        keyExtractor={(item) => item.ayah.toString()}
        renderItem={renderItem}
        extraData={currentAyah}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  ayahText: {
    fontSize: 18,
    marginVertical: 8,
  },
  highlight: {
    backgroundColor: '#ffeb3b',
  },
});
