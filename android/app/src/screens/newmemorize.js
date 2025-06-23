    
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
