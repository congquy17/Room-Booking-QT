import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import ReactNativePhoneInput from 'react-native-phone-input';
const SocialButton = ({ icon, text, borderColor, onPress }: any) => (
    <TouchableOpacity style={[styles.socialButton, { borderColor }]} onPress={onPress}>
        {icon}
        <Text style={styles.socialButtonText}>{text}</Text>
    </TouchableOpacity>
);
const PhoneInput = ({ value, onChange }: any) => (
    <ReactNativePhoneInput
        initialCountry={'VN'}
        initialValue="84847911569"
        textProps={{
            placeholder: 'Enter a phone number...'
        }}
        onChangePhoneNumber={onChange}
        style={styles.phoneInputContainer}
    />
);
export default function SignUp() {
    const router = useRouter();
    const [value, setValue] = React.useState('');
    return (
        <View style={styles.container}>
            <ScrollView style={{ marginTop: 50, flex: 1 }}>
                <Text style={{ fontSize: 26, marginBottom: 30 }}>SignUp</Text>
                <PhoneInput value={value} onChange={setValue} />
                <TextInput
                    secureTextEntry={true}
                    style={{
                        marginTop: 20,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderWidth: 1,
                        borderColor: '#ded3d3d4'
                    }}
                    placeholder="Nhập mật khẩu"
                />
                <TextInput
                    secureTextEntry={true}
                    style={{
                        marginTop: 20,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderWidth: 1,
                        borderColor: '#ded3d3d4'
                    }}
                    placeholder="Nhập lại mật khẩu"
                />
                <TouchableOpacity
                    style={{
                        paddingVertical: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 20,
                        backgroundColor: '#00bdd5',
                        borderRadius: 5
                    }}
                >
                    <Text style={{ color: 'white' }}>Sign Up</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 20 }}>
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
                </View>
                <TouchableOpacity
                    style={{ padding: 20, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => router.push('/auth/sign-in/SignIn')}
                >
                    <Text
                        style={{
                            textDecorationLine: 'underline',
                            color: '#00bdd5'
                        }}
                    >
                        SignIn
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
{
    /* <TouchableOpacity
        style={{ padding: 20 }}
        onPress={() => router.push("/auth/sign-in/SignIn")}
      >
        <Text>SignIn</Text>
      </TouchableOpacity> */
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    phoneInputContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ded3d3d4'
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
    }
});
