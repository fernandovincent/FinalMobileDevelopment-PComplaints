import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

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

export default Button;

const styles = StyleSheet.create({
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
});
