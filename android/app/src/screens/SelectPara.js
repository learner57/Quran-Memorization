import React, { useState }  from 'react';
import {  View,  Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SelectPara = () => {
     const navigation = useNavigation();
  const paras = [
    { id: 1, title: 'الٓمّٓ'},
    { id: 2, title: 'سَيَقُولُ'},
    { id: 3, title: 'تِلْكَ ٱلرُّسُلُ'},
    { id: 4, title: 'لَن تَنَالُوا'},
    { id: 5, title: 'وَٱلْمُحْصَنَاتُ'},
    { id: 6, title: 'لَا يُحِبُّ اللَّهُ'},
    { id: 7, title: 'وَإِذَا سَمِعُوا'},
    { id: 8, title: 'وَلَوْ أَنَّنَا'},
    { id: 9, title: 'قَدْ أَفْلَحَ'},
    { id: 10, title: 'وَٱعْلَمُوا'},
    { id: 11, title: 'يَعْتَذِرُونَ'},
    { id: 12, title: 'وَمَا مِنْ دَابَّةٍ'},
    { id: 13, title: 'وَمَا أُبَرِّئُ'},
    { id: 14, title: 'رُبَمَا'},
    { id: 15, title: 'سُبْحَانَ ٱلَّذِي'},
    { id: 16, title: 'قَالَ أَلَمْ'},
    { id: 17, title: 'اقْتَرَبَ'},
    { id: 18, title: 'قَدْ أَفْلَحَ'},
    { id: 19, title: ' وَقَالَ الَّذِينَ'},
    { id: 20, title: 'أَمَّنْ خَلَقَ'},
    { id: 21, title: ' أُتْلُ مَا أُوحِيَ'},
    { id: 22, title: ' وَمَنْ يَقْنُتْ'},
    { id: 23, title: ' وَمَا لِيَ'},
    { id: 24, title: ' فَمَنْ أَظْلَمُ'},
    { id: 25, title: ' إِلَيْهِ يُرَدُّ'},
    { id: 26, title: 'حٰمٓ'},
    { id: 27, title: 'قَالَ فَمَا خَطْبُكُم'},
    { id: 28, title: 'قَدْ سَمِعَ ٱللَّهُ'},
    { id: 29, title: 'تَبَارَكَ ٱلَّذِي'},
    { id:30 , title: 'عَمَّ يَتَسَاءَلُونَ'},
     
  ];

  return (
    <View style={styles.container}>
       <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Surah')}>
        <Text style={[styles.tabItem]}>BY SURAH</Text>
        </TouchableOpacity>
        <Text style={styles.tabItem}>BY PARAH</Text>
      </View>
          {/*para List */}
      <ScrollView style={styles.paraList}>
        {paras.map((para) => (
          <TouchableOpacity key={para.id} style={styles.paraItem}>
            <View style={styles.paraDetails}>
              <Text style={styles.paraTitle}>{para.title}</Text>
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
    paraList: {
      paddingHorizontal: 16,
      marginTop: 8,
    },
    paraItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      marginBottom: 8,
      borderRadius: 8,
      backgroundColor: '#F9F9F9',
      borderWidth: 1,
     // borderColor: '#ddd',
    },
   paraDetails: {
    backgroundColor: '#E2E8DF',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    fontSize: 16,
    color: '#3C806B',
    flex: 1,
    },
    paraTitle: {
      fontSize: 16,
    fontWeight: 'bold',
    color: '#3C806B',
    },
 }
);
  
export default SelectPara;