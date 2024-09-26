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

const SocialButton = ({ icon, text, borderColor, onPress }: any) => (
    <TouchableOpacity style={[styles.socialButton, { borderColor }]} onPress={onPress}>
        {icon}
        <Text style={styles.socialButtonText}>{text}</Text>
    </TouchableOpacity>
);
export default function SignIn() {
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
                {showPassword && (
                    <TextInput
                        secureTextEntry={true}
                        style={{
                            marginVertical: 20,
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            borderWidth: 1,
                            borderColor: '#ded3d3d4'
                        }}
                        placeholder="Nhập mật khẩu"
                    />
                )}

                <TouchableOpacity onPress={requestSignIn} style={styles.continueButton}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>Or</Text>
                <SocialButton
                    icon={<AntDesign name="apple-o" size={24} color="black" />}
                    text="Connect with Apple"
                    borderColor="black"
                    onPress={() => {}}
                />
                <SocialButton
                    icon={<FontAwesome5 name="facebook" size={24} color="#3b9ce8" />}
                    text="Connect with Facebook"
                    borderColor="#3b9ce8"
                    onPress={() => {}}
                />
                <SocialButton
                    icon={<AntDesign name="google" size={24} color="#ca3f49" />}
                    text="Connect with Google"
                    borderColor="#c47d84"
                    onPress={() => {}}
                />
                <Text style={styles.subtext}>By signing up, you agree to our Terms of Service and Privacy Policy</Text>
                <View style={styles.linkBottom}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => router.push('/(tabs)/Search')}>
                        <Text style={styles.linkText}>Home</Text>
                    </TouchableOpacity>

                    <Text>
                        <TouchableOpacity onPress={() => router.push('/auth/sign-up/SignUp')}>
                            <Text style={styles.linkText}>Signup</Text>
                        </TouchableOpacity>
                    </Text>
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
        textAlign: 'center',
        marginVertical: 10
    },
    socialButton: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginBottom: 10
    },
    socialButtonText: {
        marginLeft: 5,
        textAlign: 'center',
        color: 'black'
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
        marginTop: 140
    }
});
