import { Dimensions, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Octicons } from '@expo/vector-icons';
import SeachBarModal from '../modal/SeachBarModal';

export default function SearchBar() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View
            style={{
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 10
            }}
        >
            <TouchableOpacity style={{ padding: 2 }} onPress={() => setModalVisible(true)}>
                <Octicons style={{ marginLeft: 15 }} name="search" size={24} color="black" />
            </TouchableOpacity>
            <TextInput style={{ marginLeft: 10, width: '100%' }} placeholder="Where do you want to stay?" />
            <View>
                <SeachBarModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
