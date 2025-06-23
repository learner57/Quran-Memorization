import { View, Text, TextInput,  StyleSheet, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from 'C:/Users/hp/quranmemorization/firebase.config';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleInputChange = (setter) => (value) => {
      setter(value);
      if(errorMessage){
        setErrorMessage(null)
      }
    }

    const handleLogin = () => {
        setErrorMessage(null);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if(user.emailVerified){
               // alert('Login Successful!');
                navigation.navigate('Home')
            }
            else{
                setErrorMessage('Please verify your email before login')
            }
            setEmail('');
            setPassword('');
        })
        .catch((error) => {
            const errorMsg = error.message;
            setErrorMessage(errorMsg);
        })
    }

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert('Enter Email', 'Please enter your email to reset the password.');
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('Password Reset', 'A password reset link has been sent to your email.');
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
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
                secureTextEntry={!isPasswordVisible}
                />
                 <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                   <Ionicons
                     name={isPasswordVisible ? 'eye' : 'eye-off'}
                     size={22}
                     color="#006d5b"
                    />
                 </TouchableOpacity>
           </View> 
      {
        errorMessage && (
            <Text >{errorMessage}</Text>
        )
      }
        <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.label}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
     
      <View >
        <Text >Don't have an account?{' '}
        <Text style={styles.label}   onPress={() => navigation.navigate('signup')}>Sign up</Text>
        </Text>
      </View>
    </View>
  )
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
},
);

export default Login;