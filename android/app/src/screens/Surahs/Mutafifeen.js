
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
//import { useNavigation } from "@react-navigation/native";

// Load JSON with array of Surahs
const quranData = require("C:/Users/hp/quranmemorization/android/app/src/main/assets/JsonFiles/Mutafifeen.json");

// Function to add Ayah symbol
const appendAyahSymbol = (ayah, text) => {
  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  let ayahNumber = ayah.toString().split("").map(num => arabicNumbers[parseInt(num)]).join("");

  return `${text} ${ayahNumber}۝`;
};

const Mutafifeen = () => {
 // const navigation = useNavigation();
  const surah = quranData[0]; // Assuming only one Surah
  const [verses, setVerses] = useState(
    surah.verses.map(item => ({
      ...item,
      text: appendAyahSymbol(item.id, item.text),
    }))
  );

  return (
    <View style={styles.container}>
      <Text style={styles.surahTitle}>
        {surah.name} ({surah.translation})
      </Text>
      <FlatList
        data={verses}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.verseContainer}>
            <Text style={styles.ayahText}>{item.text}</Text>
            <Text style={styles.translation}>{item.translation}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    backgroundColor: '#fdf7e8',
  },
  surahTitle: {
    color: '#006d5b',
    paddingVertical: 10,
    borderBottomWidth: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  verseContainer: {
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  ayahText: {
    fontSize: 18,
    textAlign: "right",
    fontFamily: "Amiri",
    color: '#3C806B',
  },
  translation: {
    fontSize: 14,
    textAlign: "right",
    color: "#666",
  },
});

export default Mutafifeen;