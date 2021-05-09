import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { IconBack } from '../../../assets/icon';
import {Gap} from '../../atoms';

const Header2 = ({title, onBack}) => {
    return (
        <View style={styles.container}>
            {
                onBack && (
                    <TouchableOpacity onPress={onBack} activeOpacity={0.6}>
                    </TouchableOpacity>
                )
            }
            <Text style={styles.text}>{title}</Text>
            <Gap width={55}/>
        </View>
    );
};

export default Header2;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 55,
        paddingVertical: 38,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize:22,
        fontFamily: 'Montserrat-SemiBold',
    },
    back: {
        padding: 10,
    },
});
