import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface ButtonProps {
    title: string;
    onPress?: () => void;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    borderWidth?: number;
    icon?: React.ReactNode;
    size?: 'small' | 'normal' | 'large';
    textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    backgroundColor,
    textColor = 'black',
    borderColor,
    borderWidth,
    icon,
    size = 'normal',
    textDecorationLine
}) => {
    const getSizeStyles = () => {
        switch (size) {
            case 'small':
                return { padding: 10, fontSize: 14 };
            case 'large':
                return { padding: 20, fontSize: 18 };
            default: // 'normal'
                return { padding: 15, fontSize: 16 };
        }
    };
    const { padding, fontSize } = getSizeStyles();
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { borderColor, backgroundColor, borderWidth, padding }]}
            accessibilityLabel={title} // Thêm accessibilityLabel
            activeOpacity={0.4} // Hiệu ứng nhấn
        >
            <View style={styles.buttonContent}>
                {icon && <View style={styles.iconContainer}>{icon}</View>}
                <Text style={[styles.buttonText, { color: textColor, fontSize, textDecorationLine }]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center'
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer: {
        marginRight: 5
    }
});

export default Button;
