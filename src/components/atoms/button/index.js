import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

<<<<<<< HEAD
const Button = ({title, color, textColor, onPress}) => {
  return (
    <View style={styles.tengah}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <View style={styles.container(color)}>
          <Text style={styles.text(textColor)}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
=======
const Button = ({title, color='#02CF8E', textColor='#020202', onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6} >
            <View style={styles.container(color)}>
            <Text style={styles.text(textColor)} >{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
>>>>>>> upstream/master

export default Button;

const styles = StyleSheet.create({
<<<<<<< HEAD
  tengah: {
    alignItems: 'center',
  },
  container: color => ({
    height: 40,
    width: 250,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 35,
    marginVertical: 10,
  }),
  text: textColor => ({
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: textColor,
  }),
=======
    container : (color) => ({
        height: 45,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    }),
    text: (textColor) => ({
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color : textColor,
    }),
>>>>>>> upstream/master
});
