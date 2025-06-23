/* 1-75
import { Audio } from 'expo-av';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function AudioRecorder() {
  const [recording, setRecording] = useState(null);
  const [recordedUri, setRecordedUri] = useState(null);

  // Start Recording
  async function startRecording() {
    try {
      // Request permission
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access microphone is required!');
        return;
      }

      // Prepare audio recording
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const recordingObject = new Audio.Recording();
      await recordingObject.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recordingObject.startAsync();

      setRecording(recordingObject);
    } catch (error) {
      console.error('Failed to start recording:', error);
    }
  }

  // Stop Recording
  async function stopRecording() {
    try {
      if (!recording) return;
      
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecordedUri(uri);
      setRecording(null);
    } catch (error) {
      console.error('Failed to stop recording:', error);
    }
  }
  async function playRecording() {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: recordedUri });
      await sound.playAsync();
    } catch (error) {
      console.error('Failed to play recording:', error);
    }
  }
  {recordedUri && <Button title="Play Recording" onPress={playRecording} />}
  

  return (
    <View style={{ padding: 20 }}>
      <Button title={recording ? 'Stop Recording' : 'Start Recording'} 
        onPress={recording ? stopRecording : startRecording} />
      
      {recordedUri && (
        <View>
          <Text>Recording saved at: {recordedUri}</Text>
        </View>
      )}
    </View>
  );
}
*/
/* 76-142
code to keep track of recorded URIs.
import React, { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

const AudioRecorder = () => {
  const [recording, setRecording] = useState(null);
  const [recordings, setRecordings] = useState([]); // Store recorded URIs

  const startRecording = async () => {
    try {
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started...");
    } catch (error) {
      console.error("Failed to start recording:", error);
    }
  };

  const stopRecording = async () => {
    if (!recording) return;
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI(); // Get the temporary URI
      console.log("Recording saved at:", uri);

      // Add the new recording to the list
      setRecordings((prev) => [...prev, uri]);
      setRecording(null);
    } catch (error) {
      console.error("Failed to stop recording:", error);
    }
  };

  const playRecording = async (uri) => {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri });
      await sound.playAsync();
      console.log("Playing:", uri);
    } catch (error) {
      console.error("Error playing recording:", error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Start Recording" onPress={startRecording} />
      <Button title="Stop Recording" onPress={stopRecording} disabled={!recording} />

      <Text style={{ marginTop: 20 }}>Recorded Audio:</Text>
      <FlatList
        data={recordings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => playRecording(item)}>
            <Text style={{ color: "blue", marginVertical: 5 }}>▶ Play Recording</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AudioRecorder;
*/
/*
import React from "react";
import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const images = [
  require("C:/Users/hp/quranmemorization/android/app/src/main/assets/images/image1.jpg"),
  require("C:/Users/hp/quranmemorization/android/app/src/main/assets/images/image2.jpg"),
  require("C:/Users/hp/quranmemorization/android/app/src/main/assets/images/image3.jpg"),
  require("C:/Users/hp/quranmemorization/android/app/src/main/assets/images/image4.jpg"),
  require("C:/Users/hp/quranmemorization/android/app/src/main/assets/images/image5.jpg"),
];

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
       
        vertical
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  imageContainer: {
    width, // Full width
    height, // Full height
    justifyContent: "center",
    alignItems: "center",
    margin: 0, // Remove extra margin
    padding: 0, // Remove extra padding
  },
  image: {
    width, // Full width
    height, // Full height
    resizeMode: "contain", // Keep aspect ratio
    alignSelf: "center", // Center the image
  },
});

export default ImageScreen;
*/
/*
import React , { useState, useEffect} from 'react';
import {  View,  Text,StyleSheet,ScrollView, ActivityIndicator, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SelectSurah = () => {
   const navigation = useNavigation();
   const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
  setChapters([
    { id: 1, title: 'الفاتحہ', ayats: 7 },
    { id: 2, title: 'البقرة', ayats: 286 },
    { id: 3, title: 'آل عمران', ayats: 200 },
    { id: 4, title: 'النساء', ayats: 176 },
    { id: 5, title: 'المائدة', ayats: 120 },
    { id: 6, title: 'الأنعام', ayats: 165 },
    { id: 7, title: 'الأعراف', ayats: 206 },
    { id: 8, title: 'الأنفال', ayats:  75},
    { id: 9, title: 'التوبة', ayats:  129},
    { id: 10, title: 'یونس', ayats:  109},
    { id: 11, title: 'ہود', ayats: 123 },
    { id: 12, title: 'یوسف', ayats:  111},
    { id: 13, title: 'الرعد', ayats:  43},
    { id: 14, title: 'ابراہیم', ayats:  52},
    { id: 15, title: 'الحجر', ayats:  99},
    { id: 16, title: 'النحل', ayats:  128}, 
    { id: 17, title: 'الإسراء', ayats:  111},
    { id: 18, title: 'الکہف', ayats:  110},
    { id: 19, title: 'مریم', ayats:  98},
    { id: 20, title: 'طہ', ayats:  135},
    { id: 21, title: 'الأنبیاء', ayats:  112},
    { id: 22, title: 'الحج', ayats:  78},
    { id: 23, title: 'المؤمنون', ayats:  118},
    { id: 24, title: 'النور', ayats:  64},
    { id: 25, title: 'الفرقان', ayats:  77},
    { id: 26, title: 'الشعراء', ayats:  227},
    { id: 27, title: 'النمل', ayats:  93},
    { id: 28, title: 'القصص', ayats:  88},
    { id: 29, title: 'العنکبوت', ayats:  69},
    { id: 30, title: 'الروم', ayats:  60},
    { id: 31, title: 'لقمان', ayats:  34},
    { id: 32, title: 'السجدہ', ayats:  30},
    { id: 33, title: 'الأحزاب', ayats:  73},
    { id: 34, title: 'سبأ', ayats:  54},
    { id: 35, title: 'فاطر', ayats:  45},
    { id: 36, title: 'یٰس', ayats:  83},
    { id: 37, title: 'الصافات', ayats: 182},
    { id: 38, title: 'ص', ayats: 88},
    { id: 39, title: 'الزمر', ayats:  75},
    { id: 40, title: 'غافر', ayats:  85},
    { id: 41, title: 'فصلت', ayats:  54},
    { id: 42, title: 'الشورٰی', ayats:  53},
    { id: 43, title: 'الزخرف', ayats:  89},
    { id: 44, title: 'الدخان', ayats:  59},
    { id: 45, title: 'الجاثیہ', ayats:  37},
    { id: 46, title: 'الأحقاف', ayats:35  },
    { id:47 , title: 'محمد', ayats:  38},
    { id:48 , title: 'الفتح', ayats:  29},
    { id:49 , title: 'الحجرات', ayats:  18},
    { id: 50, title: 'ق', ayats:  45},
    { id: 51, title: 'الذاریات', ayats:60  },
    { id: 52, title: 'الطور', ayats:  49},
    { id: 53, title: 'النجم', ayats:  62},
    { id: 54, title: 'القمر', ayats:  55},
    { id: 55, title: 'الرحمن', ayats:  78},
    { id: 56, title: 'الواقعہ', ayats:  96},
    { id:57 , title: 'الحدید', ayats:  29},
    { id: 58, title: 'المجادلہ', ayats:  22},
    { id: 59, title: 'الحشر', ayats:  24},
    { id: 60, title: 'الممتحنہ', ayats: 13 },
    { id: 61, title: 'الصف', ayats:  14},
    { id: 62, title: 'الجمعہ', ayats:  11},
    { id: 63, title: 'المنافقون', ayats: 11 },
    { id: 64, title: 'التغابن', ayats:  18},
    { id: 65, title: 'الطلاق', ayats:  12},
    { id: 66, title: 'التحریم', ayats:  12},
    { id: 67, title: 'الملک', ayats:  30},
    { id: 68, title: 'القلم', ayats:  52},
    { id: 69, title: 'الحاقہ', ayats:  52},
    { id: 70, title: 'المعارج', ayats:  44},
    { id: 71, title: 'نوح', ayats:  28},
    { id: 72, title: 'الجن', ayats:  28},
    { id: 73, title: 'المزمل', ayats:  20},
    { id: 74, title: 'المدثر', ayats:  56},
    { id: 75, title: 'القیامہ', ayats:  40},
 { id: 76, title: 'الدھر', ayats:  31},
 { id: 77, title: 'المرسلات', ayats: 50 },
 { id: 78, title: 'النبأ', ayats:  40},
 { id: 79, title: 'النازعات', ayats: 46 },
 { id: 80, title: 'عبس', ayats:  42},
 { id:81 , title: 'التکویر', ayats: 29 },
 { id: 82, title: 'الانفطار', ayats:  19},
 { id: 83, title: 'المطففین', ayats:  36},
 { id: 84, title: 'الانشقاق', ayats:  25},
 { id: 85, title: 'البروج', ayats:  22},
 { id: 86, title: 'الطارق', ayats:  17},
 { id: 87, title: 'الأعلیٰ', ayats:  19},
 { id: 88, title: 'الغاشیہ', ayats:  36},
 { id: 89, title: 'الفجر', ayats:  25},
 { id: 90, title: 'البلد', ayats:  22},
 { id: 91, title: 'الشمس', ayats:  17},
 { id: 92, title: 'اللیل', ayats:  19},
 { id: 93, title: 'الضحی', ayats:  26},
 { id: 94, title: 'الشرح', ayats:  30},
 { id: 95, title: 'التین', ayats:  20},
 { id: 96, title: 'العلق', ayats:  15},
 { id: 97, title: 'القدر', ayats:  21},
 { id: 98, title: 'البینہ', ayats:  11},
 { id: 99, title: 'الزلزلہ', ayats:  8},
 { id: 100, title: 'العادیات', ayats: 8 },
 { id: 101, title: ' القارعہ', ayats: 19},
 { id: 102, title: 'التکاثر ', ayats: 5},
 { id: 103, title: 'العصر ', ayats: 8},
 { id: 104, title: ' الہمزہ', ayats: 8},
 { id: 105, title: ' الفیل', ayats: 19},
 { id: 106, title: 'قریش ', ayats: 5},
 { id: 107, title: 'الماعون ', ayats:8 },
 { id: 108, title: ' الکوثر', ayats: 8},
 { id: 109, title: 'الکافرون ', ayats:11 },
 { id: 110, title: 'النصر ', ayats: 11},
 { id: 111, title: ' المسد', ayats: 8},
 { id: 112, title: ' الإخلاص', ayats:3 },
 { id: 113, title: 'الفلق ', ayats: 9},
 { id: 114, title: 'الناس ', ayats: 5},
  ]);

setLoading(false);
}, 10); // Simulating delay
}, []);

if (loading) {
return (
<View style={styles.loadingContainer}>
  <ActivityIndicator size="large" color="#006d5b" />
  <Text>Loading surahs...</Text>
</View>
);
}
const navigateToSurah = (chapter) => {
  switch (chapter.id) {
    case 1:
      navigation.navigate('Fatiha');
      break;
      case 114:
        navigation.navigate('Naas');
        break;
    default:
      alert('Surah screen not found');
  }
};

return (
    <View style={styles.container}>
       <View style={styles.tabBar}>
        <Text style={styles.tabItem}>BY SURAH</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Para')}>
        <Text style={styles.tabItem}>BY PARAH</Text>
        </TouchableOpacity >
      </View>

      <ScrollView style={styles.chapterList}>
        {chapters.map((chapter) => (
          <TouchableOpacity 
            key={chapter.id} 
            style={styles.chapterItem}
            onPress={() => navigateToSurah(chapter)}
          >
            <View style={styles.chapterDetails}>
              <Text style={styles.chapterTitle}>{chapter.title}</Text>
              <Text style={styles.chapterAyats}>{chapter.ayats} Ayats</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf7e8',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    
  },
  tabItem: {
    fontSize: 16,
    color: '#006d5b',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chapterList: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  chapterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 6,
    borderRadius: 8,
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
   // borderColor: '#ddd',
  },
  chapterDetails: {
    backgroundColor: '#E2E8DF',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    fontSize: 16,
    color: '#3C806B',
    flex: 1,
  },
  chapterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3C806B',
  },
  chapterAyats: {
    fontSize: 12,
    color: '#999',
  },
});

export default SelectSurah;
*/