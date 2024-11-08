import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
  } from 'react-native';
  import React from 'react';
  import { useRouter } from 'expo-router';
  import ReactNativePhoneInput from 'react-native-phone-input';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
  import Button from '@/components/Button';
  import Input from '@/components/Input';
  import axios from 'axios';
  import API_Mobile from '../../../util/constan';
  import { useDispatch } from 'react-redux';
  import { login } from '../../../store/slices/authSlice';
  import Toast from 'react-native-toast-message';
  
  const PhoneInput = ({ value, onChange }: any) => (
    <ReactNativePhoneInput
      initialCountry={'VN'}
      initialValue={value}
      textProps={{
        placeholder: 'Enter a phone number...',
        style: styles.phoneInput
      }}
      onChangePhoneNumber={onChange}
      style={styles.phoneInputContainer}
    />
  );
  
  export default function SignIn({ navigation }: { navigation: any }) {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = React.useState(false);
    const [phoneValue, setPhoneValue] = React.useState('+0976474170');
    const [password, setPassword] = React.useState('1234567'); // Default password
    const [error, setError] = React.useState('');
  
    const requestSignIn = async () => {
      try {
        console.log('phoneValue:', phoneValue);
        console.log('password:', password);
  
        // Make sure you're sending the correct payload to the API
        const response = await axios.post(`${API_Mobile}/auth/loginwithPhone`, {
          phone: `${phoneValue}`,
          password: password
        });
  
        // Assuming the response contains the user data and token
        if (response.data.token) {
          // Store the user in Redux
          dispatch(login(response.data.user)); // Update the user in Redux store
  
          navigation.replace('Main');
        } else {
          setError('Invalid credentials');
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Login failed',
            text2: 'Invalid credentials. Please try again.'
          });
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Login failed',
          text2: (error as any).message || 'Something went wrong. Please try again later.'
        });
      }
    };
  
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.h2}>Sign In</Text>
          <Text>Enter your mobile number</Text>
          <PhoneInput value={phoneValue} onChange={setPhoneValue} />
  
          {/* Password input */}
          <View style={styles.passwordContainer}>
            <Input
              placeholder="Enter your password"
              secureTextEntry={!showPassword} // Toggle visibility based on state
              onChangeText={setPassword} // Bind password state
            />
            <TouchableOpacity
              style={styles.showHideButton}
              onPress={() => setShowPassword(prevState => !prevState)} // Toggle password visibility
            >
              <Text style={styles.showHideText}>{showPassword ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
          </View>
  
          {/* Display error message if there's any */}
          {error && <Text style={styles.errorText}>{error}</Text>}
  
          <Button
            title="Continue"
            backgroundColor="#00bdd5"
            textColor="white"
            onPress={requestSignIn}
          />
  
          <Text style={styles.orText}>Or</Text>
  
          <Button
            icon={<AntDesign name="apple1" size={24} color="black" />}
            title="Connect with Apple"
            borderColor="black"
            borderWidth={1}
            onPress={() => {}}
            size="normal"
          />
          <Button
            icon={<FontAwesome5 name="facebook" size={24} color="#3b9ce8" />}
            title="Connect with Facebook"
            borderColor="#3b9ce8"
            borderWidth={1}
            onPress={() => {}}
          />
          <Button
            icon={<AntDesign name="google" size={24} color="#ca3f49" />}
            title="Connect with Google"
            borderColor="#c47d84"
            borderWidth={1}
            onPress={() => {}}
          />
  
          <Text style={styles.subtext}>By signing up, you agree to our Terms of Service and Privacy Policy</Text>
          <View style={styles.linkBottom}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
              <Text style={styles.linkText}>Home</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.linkText}>Signup</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Toast />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      marginTop: 70
    },
    h2: {
      marginBottom: 40,
      fontSize: 26,
      fontWeight: 'bold',
      color: 'black'
    },
    phoneInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10
    },
    passwordContainer: {
      position: 'relative',
    },
    showHideButton: {
      position: 'absolute',
      right: 10,
      top: 25,
      zIndex: 1,
    },
    showHideText: {
      color: '#00bdd5',
      fontWeight: 'bold',
    },
    continueButton: {
      width: '100%',
      marginTop: 20,
      padding: 15,
      backgroundColor: '#00bdd5',
      borderRadius: 5
    },
    buttonText: {
      color: 'white',
      textAlign: 'center'
    },
    phoneInputContainer: {
      marginTop: 10
    },
    orText: {
      textAlign: 'center'
    },
  
    subtext: {
      color: 'gray',
      textAlign: 'center',
      marginTop: 20
    },
    linkText: {
      textDecorationLine: 'underline',
      color: '#76b0db',
      marginLeft: 10
    },
    linkBottom: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 70
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
      marginTop: 10
    }
  });
  