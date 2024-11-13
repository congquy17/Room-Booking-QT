import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Item from "./Item"; // Giả sử đây là component hiển thị mỗi phòng
import API_Mobile from '../../../util/constan';
import { useSelector } from "react-redux";
export default function Beach() {
  interface Room {
    _id: string;
    // Add other properties of the room object here
  }
  const [rooms, setRooms] = useState<Room[]>([]); // State để lưu dữ liệu phòng
  const [loading, setLoading] = useState(true); // State để theo dõi quá trình tải dữ liệu
  const [error, setError] = useState(null); // State để lưu thông tin lỗi nếu có
  const {user} = useSelector((state: any) => state.auth);
  useEffect(() => {
    // Hàm gọi API để lấy dữ liệu phòng
    const fetchRooms = async () => {
      try {
        const response = await fetch(`${API_Mobile}/rooms/type/Beach/${user._id}`);
        const data = await response.json();

        if (response.ok) {
          setRooms(data); // Giả sử API trả về một mảng `rooms`
        } else {
          setError(data.message); // Xử lý lỗi nếu có
        }
      } catch (error) {
        setError("Lỗi kết nối đến API"); // Xử lý lỗi kết nối
      } finally {
        setLoading(false); // Hoàn tất việc tải
      }
    };

    fetchRooms(); // Gọi API khi component mount
  }, []); // Chạy một lần khi component được render

  if (loading) {
    // Hiển thị Loading Indicator khi dữ liệu đang được tải
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00bdd5" />
        <Text>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  if (error) {
    // Hiển thị thông báo lỗi nếu có
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {rooms.map((room) => (
        <Item room={room} key={room._id} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8d7da",
    padding: 20,
  },
  errorText: {
    color: "#721c24",
    fontSize: 16,
    fontWeight: "bold",
  },
});
