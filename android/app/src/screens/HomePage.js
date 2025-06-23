import React,{useEffect}  from 'react';
import { View, Text,  Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
     const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}  style={styles.Button}>
        <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Safar ul Quran</Text>
        <Text style={styles.subTitle}>Journey of The Quran</Text>
      </View>

      {/* Image/Placeholder Section */}
      <View style={styles.textPlaceholder}>
        <Text>وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ؟</Text>
        <Text>"اور بے شک ہم نے قرآن کو نصیحت کے لیے آسان بنا دیا ہے، تو کیا کوئی ہے جو نصیحت حاصل کرے؟"

(سورہ القمر 54:17)</Text>
      </View>

      {/* Options Section */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Surah')} style={styles.optionButton}>
          <Text style={styles.optionText}>Al-Quran</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('SixteenLineQuran')}  style={styles.optionButton}>
          <Text style={styles.optionText}>16-line Quran</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Memorize</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#fdf7e8',//'#F9F5E8',
    padding: 16,
  },
  header: {
    alignItems:'flex-start',
  },
  settingsIcon: {
    fontSize: 24,
    color: '#3C806B',
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3C806B',
  },
  subTitle: {
    fontSize: 16,
    color: '#006d5b',
  },
 textPlaceholder: {
    height: 100,
    backgroundColor: '#A8DADC',
    borderRadius: 10,
    marginVertical: 16,
    textAlign: "right",
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: '#E2E8DF',
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#3C806B',
  },
});

export default HomePage;
