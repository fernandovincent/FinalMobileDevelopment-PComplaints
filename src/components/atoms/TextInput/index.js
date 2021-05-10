import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native'

const TextInput = ({title, placeholder, isTextArea, ...rest}) => {
    if(isTextArea){
    return (
        <View>
            <Text style={styles.text} >{title}</Text>
            <TextInputRN multiline={true} numberOfLines={6} style={styles.inputArea} placeholder={placeholder} {...rest} />
        </View>
    );
}
    return (
    <View>
        <Text style={styles.text} >{title}</Text>
        <TextInputRN style={styles.input} placeholder={placeholder} {...rest} />
    </View>
);
}

export default TextInput;

const styles = StyleSheet.create({
    text:{
        fontSize: 16,
        fontFamily: 'Montserrat-Light',
        marginBottom: 6,
    },
    input :{
        borderWidth: 2,
        borderColor: '#B4B4B4',
        borderRadius: 10,
        paddingLeft: 10,
        paddingHorizontal:  10,
    },
    inputArea :{
        textAlignVertical: 'top',
        borderWidth: 2,
        borderColor: '#B4B4B4',
        borderRadius: 8,
        paddingLeft: 10,
        paddingHorizontal:  10,
    },
});