import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import ReactNativePhoneInput from 'react-native-phone-input';
import Button from '@/components/Button';
import Input from '@/components/Input';
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

                <Input placeholder="Nhập mật khẩu" onChangeText={() => {}} />
                <Input placeholder="Nhập Lại mật khẩu" onChangeText={() => {}} />

                <Button title="Sign Up" textColor="white" backgroundColor="#00bdd5" onPress={() => {}} />
                <View style={{ marginTop: 20 }}>
                    <Button
                        icon={<AntDesign name="apple-o" size={24} color="black" />}
                        title="Connect with Apple"
                        borderColor="black"
                        borderWidth={1}
                        onPress={() => {}}
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
                        onPress={() => {}}
                        borderWidth={1}
                    />
                </View>

                <Button
                    title="Sign In"
                    textColor="#00bdd5"
                    textDecorationLine="underline"
                    onPress={() => router.push('/auth/sign-in/SignIn')}
                />
            </ScrollView>
        </View>
    );
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
