import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { NavigationProp } from '@react-navigation/native';

export default function Inbox({ navigation }: { navigation: NavigationProp<any> }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'AI Assistant', role: 'ai', message: 'Hello! How can I assist you today?', time: '10:30 AM' },
    { id: 2, sender: 'Admin', role: 'admin', message: 'I have a question about your product.', time: '9:00 AM' },
  ]);

  // Hàm điều hướng đến chi tiết cuộc trò chuyện
  const openChat = (message: { id: number; sender: string; role: string; message: string; time: string; }) => {
    if(message.role === 'ai') {
      navigation.navigate('ChatDetail', { message });
    }else {
      navigation.navigate('UserchatForAdmin', { message });
    }
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
              <Text style={[styles.sender, item.role === 'admin' ? styles.adminSender : styles.aiSender]}>
                {item.sender}
              </Text>
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
  adminSender: {
    color: '#007bff', // Màu cho Admin
  },
  aiSender: {
    color: '#28a745', // Màu cho AI
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
