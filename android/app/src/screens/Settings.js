import React,{useEffect}  from 'react';
import { View, Text,  Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    const navigation = useNavigation();
 return (
   <View style={styles.container}>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>User Account</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.optionButton}>
          <Text style={styles.optionText}>Progress Tracking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>About</Text>
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
        fontSize: 19,
        fontWeight: 'bold',
        color: '#3C806B',
      },
    });

    
export default Settings;