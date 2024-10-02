import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
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
const PhoneInput = ({ value, onChange }: any) => (
    <ReactNativePhoneInput
        initialCountry={'VN'}
        initialValue="84847911569"
        textProps={{
            placeholder: 'Enter a phone number...',
            style: styles.phoneInput
        }}
        onChangePhoneNumber={onChange}
        style={styles.phoneInputContainer}
    />
);
export default function SignIn({navigation}) {
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState(false);
    const [value, setValue] = React.useState('');
    const requestSignIn = () => {
        setShowPassword(!showPassword);
    };
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.h2}>Sign In</Text>
                <Text>Enter your mobile number</Text>
                <PhoneInput value={value} onChange={setValue} />
                {showPassword && <Input placeholder="Nhập mật khẩu" secureTextEntry onChangeText={() => {}} />}

                <Button title="Continue" backgroundColor="#00bdd5" textColor="white" onPress={requestSignIn} />

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
                    <TouchableOpacity onPress={() =>navigation.navigate('Main')}>
                        <Text style={styles.linkText}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>  navigation.navigate('SignUp')}>
                        <Text style={styles.linkText}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        marginTop: 100
    }
});
