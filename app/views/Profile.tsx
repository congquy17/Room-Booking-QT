import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
export default function Profile() {
    const router = useRouter();
    return (
        <View>
            <TouchableOpacity style={{ padding: 50 }} onPress={() => router.push('/auth/sign-in/SignIn')}>
                <Text>dang xuat</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({});
