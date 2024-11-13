import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import moment from 'moment';
import axios from 'axios';

interface Message {
    sender: string;
    content: string;
    timestamp: string; // Thêm trường timestamp để lưu thời gian
}

const UserChatForAdmin: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [socket, setSocket] = useState<any>(null); // Có thể là đối tượng socket
  const userId = useSelector((state: any) => state.auth.user?._id);
  const nameuser  = useSelector((state: any) => state.auth.user?.name);

  useEffect(() => {
      if (!userId) return;

      // Gọi API để lấy tin nhắn lịch sử
      const fetchMessageHistory = async () => {
          try {
              const response = await axios.get(`http://localhost:5000/api/v1/socket/history/${userId}`);
              if (response.data && response.data) {
                  setMessages(response.data);
              }
          } catch (error) {
              console.error('Error fetching message history:', error);
          }
      };

      fetchMessageHistory();

      const socketConnection = io('http://localhost:5000');

      socketConnection.on('connect', () => {
          console.log('Connected to socket server');
          socketConnection.emit('joinUserRoom', userId); // User tham gia phòng chat của mình
      });

      socketConnection.on('newMessage', (message: Message) => {
        console.log('newMessage', message);
        
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      setSocket(socketConnection);

      return () => {
          socketConnection.disconnect();
      };
  }, [userId]);
  const sendMessage = () => {
      if (!newMessage.trim()) return;

      if (socket) {
          const message = { userId,nameuser, messageContent: newMessage, timestamp: new Date().toISOString() };
          socket.emit('sendMessageToAdmin', message); // Gửi tin nhắn từ user tới admin
          setMessages((prevMessages) => [
              ...prevMessages,
              { sender: nameuser, content: newMessage, timestamp: message.timestamp }
          ]);
          setNewMessage('');
      }
  };

  // Hàm format thời gian thành giờ, phút, giây
  const formatTime = (timestamp: string) => {
      const duration = moment(timestamp).fromNow(); // Dùng moment để hiển thị thời gian
      return duration;
  };

  return (
      <View style={styles.container}>
          <FlatList
              data={messages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                  <View
                      style={{
                          padding: 12,
                          marginVertical: 8,
                          borderRadius: 8,
                          maxWidth: '80%',
                          backgroundColor: item.sender === 'admin' ? '#dcedc8' : '#e1f5fe',
                          alignSelf: item.sender === 'admin' ? 'flex-start' : 'flex-end'
                      }}
                  >
                      <View
                          style={{
                              flexDirection: 'column' ,
                              flexWrap: 'wrap' // Để tin nhắn xuống dòng nếu cần
                          }}
                      >
                         
                          <Text
                              style={{
                                  fontSize: 16,
                                  color: '#333',
                                  fontWeight: 'bold',
                                  textAlign: item.sender === 'admin' ? 'left' : 'right',
                                  marginRight: item.sender === 'admin' ? 8 : 0,
                              }}
                          >
                              {item.sender}
                          </Text>
                          <Text
                              style={{
                                  fontSize: 16,
                                  color: '#333',
                                  marginRight: item.sender === 'admin' ? 8 : 0,
                                  flexWrap: 'wrap' ,
                                  textAlign: 'left' ,
                              }}
                          >
                              {item.content}
                          </Text>
                      </View>
                      <Text
                          style={{
                              fontSize: 12,
                              color: '#888',
                              marginTop: 4,
                              textAlign: item.sender === 'admin' ? 'left' : 'right'
                          }}
                      >
                          {formatTime(item.timestamp)}
                      </Text>
                  </View>
              )}
          />

          <View style={styles.inputContainer}>
              <TextInput
                  value={newMessage}
                  onChangeText={setNewMessage}
                  placeholder="Type a message"
                  style={styles.input}
                  multiline // Cho phép nhập tin nhắn nhiều dòng
              />
              <Button title="Send" onPress={sendMessage} color="#4CAF50" />
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f9f9f9'
  },
  inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16
  },
  input: {
      flex: 1,
      height: 40,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 20,
      paddingLeft: 12,
      marginRight: 8,
      fontSize: 16
  }
});

export default UserChatForAdmin;

