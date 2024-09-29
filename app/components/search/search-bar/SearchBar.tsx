import { Dimensions, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Octicons } from '@expo/vector-icons';
import SeachBarModal from '../components/SeachBarModal';

export default function SeachBar() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View
            style={{
                height: '100%',
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 5,
                backgroundColor: 'white',
                borderRadius: 10
            }}
        >
            <TouchableOpacity style={{ padding: 2 }} onPress={() => setModalVisible(true)}>
                <Octicons style={{ marginLeft: 15 }} name="search" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
                style={{ marginLeft: 10, width: '80%', paddingVertical: 5 }}
                placeholder="Where do you want to stay?"
            />
            <View>
                <SeachBarModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
