import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import ReactNativePhoneInput from 'react-native-phone-input';
import Button from '@/components/Button';
import Input from '@/components/Input';
import API_Mobile from '../../../util/constan';
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

import { NavigationProp } from '@react-navigation/native';

export default function SignUp({ navigation }: { navigation: NavigationProp<any> }) {
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Hàm xử lý đăng ký người dùng
    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Lỗi', 'Mật khẩu không khớp');
            return;
        }

        try {
            const response = await fetch(`${API_Mobile}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: phone,
                    password: password,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                // Đăng ký thành công
                Alert.alert('Thành công', 'Đăng ký thành công');
                navigation.navigate('SignIn'); // Chuyển đến trang đăng nhập
            } else {
                // Xử lý lỗi
                Alert.alert('Lỗi', data.message || 'Đã xảy ra lỗi khi đăng ký');
            }
        } catch (error) {
            Alert.alert('Lỗi', 'Có lỗi xảy ra. Vui lòng thử lại sau');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={{ marginTop: 50, flex: 1 }}>
                <Text style={{ fontSize: 26, marginBottom: 30 }}>Sign Up</Text>
                <PhoneInput value={phone} onChange={setPhone} />

                <Input
                    placeholder="Nhập mật khẩu"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <Input
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry={true}
                    onChangeText={setConfirmPassword}
                />

                <Button title="Sign Up" textColor="white" backgroundColor="#00bdd5" onPress={handleSignUp} />
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
                    onPress={() => navigation.navigate('SignIn')}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    phoneInputContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ded3d3d4',
    },
    socialButton: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginBottom: 10,
    },

    socialButtonText: {
        marginLeft: 5,
        textAlign: 'center',
        color: 'black',
    },
});
