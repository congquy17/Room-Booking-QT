import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Inbox({ navigation }) {
  // Dữ liệu tin nhắn giả lập
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', message: 'Hello! How are you?', time: '10:30 AM' },
    { id: 2, sender: 'Jane Smith', message: 'Meeting at 3 PM?', time: '9:00 AM' },
    { id: 3, sender: 'Bob Johnson', message: 'Let’s catch up soon!', time: 'Yesterday' },
    // Thêm các tin nhắn khác
  ]);

  // Hàm điều hướng đến chi tiết cuộc trò chuyện
  const openChat = (message) => {
    navigation.navigate('ChatDetail', { message });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Inbox</Text>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageItem} onPress={() => openChat(item)}>
            <View style={styles.messageDetails}>
              <Text style={styles.sender}>{item.sender}</Text>
              <Text style={styles.messageText}>{item.message}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  messageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  messageDetails: {
    flexDirection: 'column',
  },
  sender: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 16,
    color: '#555',
  },
  time: {
    fontSize: 14,
    color: '#999',
  },
});
