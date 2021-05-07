import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Button = ({title, color='#02CF8E', textColor='#020202', onPress, disable}) => {
    if (disable) {
        <View>
            <View style={styles.disableBg}>
            <Text style={styles.disableTxt} >{title}</Text>
            </View>
        </View>
    };
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6} >
            <View style={styles.container(color)}>
            <Text style={styles.text(textColor)} >{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container : (color) => ({
        height: 45,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }),
    disableBg: {
        backgroundColor: "#EDEEF0",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    disableTxt: {
        color: "#B1B7C2",
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
    },
    text: (textColor) => ({
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color : textColor,
    }),
});
