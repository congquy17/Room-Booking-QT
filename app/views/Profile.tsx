import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; // Import biểu tượng từ Material Icons

export default function Profile({ navigation }) {
    // Giả lập dữ liệu người dùng
    const user = {
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@example.com',
        phone: '0123456789',
        avatar: 'https://picsum.photos/200/300',
        interests: ['Lập trình', 'Du lịch', 'Âm nhạc'], // Sở thích
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.interests}>{user.interests.join(', ')}</Text>
            </View>

            {/* Hình ảnh ngắn thêm vào giữa */}
            <Image 
                source={{ uri: 'https://picsum.photos/400/200' }} 
                style={styles.shortImage} 
                resizeMode="cover" 
            />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChangeInfo')}>
                <MaterialIcons name="edit" size={24} color="#007BFF" />
                <Text style={styles.buttonText}>Đổi thông tin</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChangePassword')}>
                <MaterialIcons name="lock" size={24} color="#007BFF" />
                <Text style={styles.buttonText}>Thay đổi mật khẩu</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
                <MaterialIcons name="settings" size={24} color="#007BFF" />
                <Text style={styles.buttonText}>Cài đặt</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                <MaterialIcons name="logout" size={24} color="#007BFF" />
                <Text style={styles.buttonText}>Đăng xuất</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#f0f4f8',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: '#007BFF',
        marginBottom: 10,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    interests: {
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    shortImage: {
        width: '100%',
        height: 100, // Chiều cao hình ảnh ngắn
        borderRadius: 10,
        marginBottom: 20,
        elevation: 2, // Tạo hiệu ứng đổ bóng
    },
    button: {
        backgroundColor: 'white',
        borderColor: '#007BFF',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 15,
        borderRadius: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 3,
    },
    buttonText: {
        color: '#007BFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10, // Khoảng cách giữa biểu tượng và văn bản
    },
});
