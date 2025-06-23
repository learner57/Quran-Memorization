import React, { useState } from 'react';
import { Text, View, TextInput,  StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from 'C:/Users/hp/quranmemorization/firebase.config.js';
import { useNavigation } from '@react-navigation/native';

const Signup =()=> {
  const navigation = useNavigation();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [errorMessage,setErrorMessage] = useState(null);
  const [emailSent,setEmailSent] = useState(false);
  
    // Higher Order Function
    const handleInputChange = (setter) => (value) => {
      setter(value);
      if(errorMessage){
        setErrorMessage(null)
      }
    }

    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // alert('User registered Successfully!')
            sendEmailVerification(user)
            .then(() => {
              alert('Verification email sent! Please check your inbox')
            })
            .catch((error) => {
              setErrorMessage('Error sending verification email');
            })
            setEmail('');
            setPassword('');
        })
        .catch((error) => {
            const errorMsg = error.message;
            setErrorMessage(errorMsg);
        })
    }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safar ul Quran</Text>
       <Text style={styles.subtitle}>Journey of The Quran</Text>
      <View>
      <TextInput
            style={styles.input}
            placeholder='Email'
            value={email}
            onChangeText={handleInputChange(setEmail)}
            keyboardType='email-address'
            />
      </View>
        <View style={styles.passwordContainer}>
     <TextInput
      style={styles.input}
            placeholder='Password'
            value={password}
            onChangeText={handleInputChange(setPassword)}
            secureTextEntry
            />
       </View> 
      {
        errorMessage && (
            <Text >{errorMessage}</Text>
        )
      }
     {
      !emailSent && (
        <TouchableOpacity
        onPress={handleSignup}
      >
     <Text style={styles.label}>Sign up</Text>
      </TouchableOpacity>
      )
     }
     {
      emailSent && (
        <Text >A verification email has been sent to your email address. Please verify your email before login!</Text>
      )
     }
      <View >
        <Text>Already have an account?{' '}
        <Text style={styles.label}  onPress={() => navigation.navigate('login')}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf7e8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#006d5b',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#006d5b',
  },
  label: {
    fontSize: 14,
    color: '#006d5b',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#006d5b',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems:'center',
    height:'50',
    marginVertical: 10,
  },
  eyeButton: {
    marginLeft: -30,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#006d5b',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#006d5b',
  },
});

export default Signup;
