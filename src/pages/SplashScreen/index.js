import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 2000)
  }, []);

  return (
    <View style={styles.page}>
      <Logo />
      <Text style={styles.text}>P-Complaints</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#92E3A9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Montserrat-SemiBold',
    color: '#112340',
  },
});
