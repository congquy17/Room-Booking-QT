import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

interface InputProps {
    placeholder: string;
    onChangeText?: (value: string) => void;
    secureTextEntry?: boolean;
}

const Input = ({ placeholder, onChangeText, secureTextEntry }: InputProps) => {
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
    );
};

export default Input;

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ded3d3d4'
    }
});
