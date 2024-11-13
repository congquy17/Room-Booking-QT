import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

export default function ChatDetail({ route, navigation }) {
    const { message } = route.params; // Lấy thông tin tin nhắn từ route
    const [chatMessages, setChatMessages] = useState([
        { id: 1, text: message.message, sender: message.sender }
    ]);
    const [newMessage, setNewMessage] = useState('');
    const [userId, setUserId] = useState('');

    // Tạo user_id ngẫu nhiên khi bắt đầu phiên trò chuyện
    useEffect(() => {
        const generatedUserId = `user_${Math.random().toString(36).substr(2, 9)}`;
        setUserId(generatedUserId);
    }, []);

    // Hàm để gửi tin nhắn mới
    const sendMessage = async () => {
        if (newMessage.trim()) {
            const userMessage = { id: chatMessages.length + 1, text: newMessage, sender: 'You' };
            setChatMessages([...chatMessages, userMessage]);
            setNewMessage('');

            try {
                // Gửi tin nhắn tới API chat của bạn
                const response = await axios.post('http://127.0.0.1:8080/chat', {
                    message: newMessage,
                    user_id: userId, // Truyền user_id cùng với tin nhắn
                });

                // Giả sử API trả về phản hồi từ AI trong trường 'response'
                const aiResponse = response.data.response;

                // Cập nhật tin nhắn phản hồi của AI vào UI
                setChatMessages((prevMessages) => [
                    ...prevMessages,
                    { id: prevMessages.length + 1, text: aiResponse, sender: 'AI' }
                ]);
            } catch (error) {
                console.error("Error sending message to API:", error);
                setChatMessages((prevMessages) => [
                    ...prevMessages,
                    { id: prevMessages.length + 1, text: 'Có lỗi xảy ra khi kết nối tới API.', sender: 'AI' }
                ]);
            }
        }
    };

    return (
        <View style={styles.container}>
           

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
        padding: 10,
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: 'white',
    },
    backButton: {
        position: 'absolute',
        top: 6,
        left: 10,
        borderRadius: 30,
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '700',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#eee',
        padding: 10,
    },
    textInput: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        maxWidth: '80%',
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#F1F1F1',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        maxWidth: '80%',
    },
    messageText: {
        fontSize: 16,
    },
});
