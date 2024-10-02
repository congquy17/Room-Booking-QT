import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function ChatDetail({ route,navigation }) {
    const { message } = route.params; // Lấy thông tin tin nhắn từ route
    const [chatMessages, setChatMessages] = useState([
        { id: 1, text: message.message, sender: message.sender }
        // Thêm các tin nhắn khác của cuộc trò chuyện
    ]);
    const [newMessage, setNewMessage] = useState('');

    // Hàm để gửi tin nhắn mới
    const sendMessage = () => {
        if (newMessage.trim()) {
            setChatMessages([...chatMessages, { id: chatMessages.length + 1, text: newMessage, sender: 'You' }]);
            setNewMessage('');
        }
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: 10,
                    backgroundColor: 'white'
                }}
            >
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()} // Quay lại trang trước đó
                >
                    <AntDesign name="left" size={20} color="black" />
                </TouchableOpacity>
                <View style={{ backgroundColor: 'white', justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 700 }}>{message.sender}</Text>
                </View>
            </View>
            <FlatList
                data={chatMessages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={item.sender === 'You' ? styles.userMessage : styles.otherMessage}>
                        <Text style={styles.messageText}>{item.text}</Text>
                    </View>
                )}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type your message..."
                    value={newMessage}
                    onChangeText={(text) => setNewMessage(text)}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    backButton: {
        position: 'absolute',
        top: 6, // Cách đỉnh ảnh
        left: 10, // Cách cạnh trái
        borderRadius: 30,
        padding: 10
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#eee',
        padding: 10
    },
    textInput: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10
    },
    sendButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        maxWidth: '80%'
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#F1F1F1',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        maxWidth: '80%'
    },
    messageText: {
        fontSize: 16
    }
});
