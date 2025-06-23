import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
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
        { id: 8, title: 'الأنفال', ayats: 75 },
        { id: 9, title: 'التوبة', ayats: 129 },
        { id: 10, title: 'یونس', ayats: 109 },
        { id: 11, title: 'ہود', ayats: 123 },
        { id: 12, title: 'یوسف', ayats: 111 },
        { id: 13, title: 'الرعد', ayats: 43 },
        { id: 14, title: 'ابراہیم', ayats: 52 },
        { id: 15, title: 'الحجر', ayats: 99 },
        { id: 16, title: 'النحل', ayats: 128 },
        { id: 17, title: 'الإسراء', ayats: 111 },
        { id: 18, title: 'الکہف', ayats: 110 },
        { id: 19, title: 'مریم', ayats: 98 },
        { id: 20, title: 'طہ', ayats: 135 },
        { id: 21, title: 'الأنبیاء', ayats: 112 },
        { id: 22, title: 'الحج', ayats: 78 },
        { id: 23, title: 'المؤمنون', ayats: 118 },
        { id: 24, title: 'النور', ayats: 64 },
        { id: 25, title: 'الفرقان', ayats: 77 },
        { id: 26, title: 'الشعراء', ayats: 227 },
        { id: 27, title: 'النمل', ayats: 93 },
        { id: 28, title: 'القصص', ayats: 88 },
        { id: 29, title: 'العنکبوت', ayats: 69 },
        { id: 30, title: 'الروم', ayats: 60 },
        { id: 31, title: 'لقمان', ayats: 34 },
        { id: 32, title: 'السجدہ', ayats: 30 },
        { id: 33, title: 'الأحزاب', ayats: 73 },
        { id: 34, title: 'سبأ', ayats: 54 },
        { id: 35, title: 'فاطر', ayats: 45 },
        { id: 36, title: 'یٰس', ayats: 83 },
        { id: 37, title: 'الصافات', ayats: 182 },
        { id: 38, title: 'ص', ayats: 88 },
        { id: 39, title: 'الزمر', ayats: 75 },
        { id: 40, title: 'غافر', ayats: 85 },
        { id: 41, title: 'فصلت', ayats: 54 },
        { id: 42, title: 'الشورٰی', ayats: 53 },
        { id: 43, title: 'الزخرف', ayats: 89 },
        { id: 44, title: 'الدخان', ayats: 59 },
        { id: 45, title: 'الجاثیہ', ayats: 37 },
        { id: 46, title: 'الأحقاف', ayats: 35 },
        { id: 47, title: 'محمد', ayats: 38 },
        { id: 48, title: 'الفتح', ayats: 29 },
        { id: 49, title: 'الحجرات', ayats: 18 },
        { id: 50, title: 'ق', ayats: 45 },
        { id: 51, title: 'الذاریات', ayats: 60 },
        { id: 52, title: 'الطور', ayats: 49 },
        { id: 53, title: 'النجم', ayats: 62 },
        { id: 54, title: 'القمر', ayats: 55 },
        { id: 55, title: 'الرحمن', ayats: 78 },
        { id: 56, title: 'الواقعہ', ayats: 96 },
        { id: 57, title: 'الحدید', ayats: 29 },
        { id: 58, title: 'المجادلہ', ayats: 22 },
        { id: 59, title: 'الحشر', ayats: 24 },
        { id: 60, title: 'الممتحنہ', ayats: 13 },
        { id: 61, title: 'الصف', ayats: 14 },
        { id: 62, title: 'الجمعہ', ayats: 11 },
        { id: 63, title: 'المنافقون', ayats: 11 },
        { id: 64, title: 'التغابن', ayats: 18 },
        { id: 65, title: 'الطلاق', ayats: 12 },
        { id: 66, title: 'التحریم', ayats: 12 },
        { id: 67, title: 'الملک', ayats: 30 },
        { id: 68, title: 'القلم', ayats: 52 },
        { id: 69, title: 'الحاقہ', ayats: 52 },
        { id: 70, title: 'المعارج', ayats: 44 },
        { id: 71, title: 'نوح', ayats: 28 },
        { id: 72, title: 'الجن', ayats: 28 },
        { id: 73, title: 'المزمل', ayats: 20 },
        { id: 74, title: 'المدثر', ayats: 56 },
        { id: 75, title: 'القیامہ', ayats: 40 },
        { id: 76, title: 'الدھر', ayats: 31 },
        { id: 77, title: 'المرسلات', ayats: 50 },
        { id: 78, title: 'النبأ', ayats: 40 },
        { id: 79, title: 'النازعات', ayats: 46 },
        { id: 80, title: 'عبس', ayats: 42 },
        { id: 81, title: 'التکویر', ayats: 29 },
        { id: 82, title: 'الانفطار', ayats: 19 },
        { id: 83, title: 'المطففین', ayats: 36 },
        { id: 84, title: 'الانشقاق', ayats: 25 },
        { id: 85, title: 'البروج', ayats: 22 },
        { id: 86, title: 'الطارق', ayats: 17 },
        { id: 87, title: 'الأعلیٰ', ayats: 19 },
        { id: 88, title: 'الغاشیہ', ayats: 36 },
        { id: 89, title: 'الفجر', ayats: 25 },
        { id: 90, title: 'البلد', ayats: 22 },
        { id: 91, title: 'الشمس', ayats: 17 },
        { id: 92, title: 'اللیل', ayats: 19 },
        { id: 93, title: 'الضحی', ayats: 26 },
        { id: 94, title: 'الشرح', ayats: 30 },
        { id: 95, title: 'التین', ayats: 20 },
        { id: 96, title: 'العلق', ayats: 15 },
        { id: 97, title: 'القدر', ayats: 21 },
        { id: 98, title: 'البینہ', ayats: 11 },
        { id: 99, title: 'الزلزلہ', ayats: 8 },
        { id: 100, title: 'العادیات', ayats: 8 },
        { id: 101, title: ' القارعہ', ayats: 19 },
        { id: 102, title: 'التکاثر ', ayats: 5 },
        { id: 103, title: 'العصر ', ayats: 8 },
        { id: 104, title: ' الہمزہ', ayats: 8 },
        { id: 105, title: ' الفیل', ayats: 19 },
        { id: 106, title: 'قریش ', ayats: 5 },
        { id: 107, title: 'الماعون ', ayats: 8 },
        { id: 108, title: ' الکوثر', ayats: 8 },
        { id: 109, title: 'الکافرون ', ayats: 11 },
        { id: 110, title: 'النصر ', ayats: 11 },
        { id: 111, title: ' المسد', ayats: 8 },
        { id: 112, title: ' الإخلاص', ayats: 3 },
        { id: 113, title: 'الفلق ', ayats: 9 },
        { id: 114, title: 'الناس ', ayats: 5 },
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
      case 2:
        navigation.navigate('Baqara');
        break;
      case 3:
        navigation.navigate('Aal_e_Imran');
        break;
      case 4:
        navigation.navigate('Nissa');
        break;
      case 5:
        navigation.navigate('Maeeda');
        break;
      case 6:
        navigation.navigate('Anaam');
        break;
      case 7:
        navigation.navigate('Aeyraaf');
        break;
      case 8:
        navigation.navigate('Anfaal');
        break;
      case 9:
        navigation.navigate('Tauba');
        break;
      case 10:
        navigation.navigate('Younus');
        break;
      case 11:
        navigation.navigate('Hood');
        break;
      case 12:
        navigation.navigate('Yousuf');
        break;
      case 13:
        navigation.navigate('Raad');
        break;
      case 14:
        navigation.navigate('Ibrahim');
        break;
      case 15:
        navigation.navigate('Hijir');
        break;
      case 16:
        navigation.navigate('Nahal');
        break;
      case 17:
        navigation.navigate('Bani-Israeel');
        break;
      case 18:
        navigation.navigate('Kaahaf');
        break;
      case 19:
        navigation.navigate('Mariyum');
        break;
      case 20:
        navigation.navigate('Tahaa');
        break;
      case 21:
        navigation.navigate('Anbiya');
        break;
      case 22:
        navigation.navigate('Hajj');
        break;
      case 23:
        navigation.navigate('Mominoon');
        break;
      case 24:
        navigation.navigate('Noor');
        break;
      case 25:
        navigation.navigate('Furqan');
        break;
      case 26:
        navigation.navigate('Shooaraa');
        break;
      case 27:
        navigation.navigate('Namal');
        break;
      case 28:
        navigation.navigate('Qasass');
        break;


      case 29:
        navigation.navigate('Ankaboot');
        break;
      case 30:
        navigation.navigate('Room');
        break;
      case 31:
        navigation.navigate('Luqman');
        break;
      case 32:
        navigation.navigate('Assajadah');
        break;

      case 33:
        navigation.navigate('Ahzaab');
        break;
        case 34:
        navigation.navigate('Saba');
        break;
       
      case 35:
        navigation.navigate('Faatir');
        break;
      case 36:
        navigation.navigate('Yasin');
        break;
      case 37:
        navigation.navigate('Saaffaat');
        break;
      case 38:
        navigation.navigate('Suaad');
        break;
      case 39:
        navigation.navigate('Zumur');
        break;

      case 40:
        navigation.navigate('Momin');
        break;
      case 41:
        navigation.navigate('Ha_meem_Assajdah');
        break;
      case 42:
        navigation.navigate('Shooraa');
        break;
      case 43:
        navigation.navigate('Zukhruf');
        break;
      case 44:
        navigation.navigate('Dukhaan');
        break;
      case 45:
        navigation.navigate('Jasia');
        break;
      case 46:
        navigation.navigate('Ehkaaf');
        break;
      case 47:
        navigation.navigate('Muhammad');
        break;
      case 48:
        navigation.navigate('Fatah');
        break;
      case 49:
        navigation.navigate('Hujraat');
        break;
      case 50:
        navigation.navigate('Qaaf');
        break;
        case 51:
        navigation.navigate('Zaariyaat');
        break;
        case 52:
        navigation.navigate('Toor');
        break;
        case 53:
        navigation.navigate('Najam');
        break;
        case 54:
        navigation.navigate('Qamar');
        break;
        case 55:
        navigation.navigate('Rehman');
        break;
        case 56:
        navigation.navigate('Waqiya');
        break;
        case 57:
        navigation.navigate('Hadeed');
        break;
        case 58:
        navigation.navigate('Mujadala');
        break;
        case 59:
        navigation.navigate('Hashar');
        break;
        case 60:
        navigation.navigate('Mumtahina');
        break;
        case 61:
        navigation.navigate('Saff');
        break;
        case 62:
        navigation.navigate('Jumaa');
        break;
        case 63:
        navigation.navigate('Munafiqoon');
        break;
        case 64:
        navigation.navigate('Tagahabunn');
        break;
        case 65:
        navigation.navigate('Talaq');
        break;
        case 66:
        navigation.navigate('Tehreem');
        break;
        case 67:
        navigation.navigate('Mulk');
        break;
        case 68:
        navigation.navigate('Qalam');
        break;
        case 69:
        navigation.navigate('Haaqqaa');
        break;
        case 70:
        navigation.navigate('Maarijj');
        break;
        case 71:
        navigation.navigate('Noor');
        break;
        case 72:
        navigation.navigate('Jinn');
        break;
        case 73:
        navigation.navigate('Muzammil');
        break;
        case 74:
        navigation.navigate('Mudassir');
        break;
        case 75:
        navigation.navigate('Qiyma');
        break;
        case 76:
        navigation.navigate('Dahar');
        break;
        case 77:
        navigation.navigate('Mursilaat');
        break;
        case 78:
        navigation.navigate('Naba');
        break;
        case 79:
        navigation.navigate('Naziaat');
        break;
        case 80:
        navigation.navigate('Abas');
        break;
        case 81:
        navigation.navigate('Taqveer');
        break;
        case 82:
        navigation.navigate('Infitaar');
        break;
        case 83:
        navigation.navigate('Mutafifeen');
        break;
        case 84:
        navigation.navigate('Inshiqaaq');
        break;
        case 85:
        navigation.navigate('Burooj');
        break;
        case 86:
        navigation.navigate('Tariq');
        break;
        case 87:
        navigation.navigate('Aala');
        break;
        case 88:
        navigation.navigate('Ghashiya');
        break;
        case 89:
        navigation.navigate('Fajar');
        break;
        case 90:
        navigation.navigate('Balad');
        break;
        case 91:
        navigation.navigate('Shams');
        break;
        case 92:
        navigation.navigate('Lail');
        break;
        case 93:
        navigation.navigate('Dhuha');
        break;
        case 94:
        navigation.navigate('Us_Sharah');
        break;
        case 95:
        navigation.navigate('Teen');
        break;
        case 96:
        navigation.navigate('Alaq');
        break;
        case 97:
        navigation.navigate('Qadar');
        break;
        case 98:
        navigation.navigate('Bayyina');
        break;
        case 99:
        navigation.navigate('Zilzaal');
        break;
        case 100:
        navigation.navigate('Aadiyaat');
        break;
        case 101:
        navigation.navigate('Qariya');
        break;
        case 102:
        navigation.navigate('Takasur');
        break;
        case 103:
        navigation.navigate('Asar');
        break;
        case 104:
        navigation.navigate('Humaza');
        break;
        case 105:
        navigation.navigate('Feel');
        break;
        case 106:
        navigation.navigate('Quraish');
        break;
        case 107:
        navigation.navigate('Maoon');
        break;
        case 108:
        navigation.navigate('Kauar');
        break;
        case 109:
        navigation.navigate('Kafiroon');
        break;
        case 110:
        navigation.navigate('Nasar');
        break;
        case 111:
        navigation.navigate('Lahab');
        break;
        case 112:
        navigation.navigate('Ikhlass');
        break;
        case 113:
        navigation.navigate('Falaaq');
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
