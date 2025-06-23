import React, { useEffect,useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';  
  import SQLite from 'react-native-sqlite-storage';

//export default function AuthScreen()
  const AuthScreen = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    Alert.alert('Sign Up', `Email: ${email}\nPassword: ${password}`);
  };

  const handleLogIn = () => {
    Alert.alert('Log In', `Email: ${email}\nPassword: ${password}`);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safar ul Quran</Text>
      <Text style={styles.subtitle}>Journey of The Quran</Text>

      {/* Sign-up Section */}
      <Text style={styles.label}>Sign Up (Don't have an account)</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeButton}
        >
          <Text>{showPassword ? '👁️' : '🙈'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or</Text>

      {/* Log-in Section */}
      <Text style={styles.label}>Log In (Already have an account)</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeButton}
        >
          <Text>{showPassword ? '👁️' : '🙈'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity  onPress={() => navigation.navigate('Home')}  style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
  }

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

export default AuthScreen;