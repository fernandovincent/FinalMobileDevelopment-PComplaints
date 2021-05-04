import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.contentWrapper}>
      <Gap height={50} />
        <Text style={styles.text}>Giving complaints is easier and more flexible</Text>
        <Gap height={200} />
        <Button title="Get Started" color="#112340" textColor='white' onPress={() => navigation.navigate('SignUp')} />
        <Gap height={17} />
        <Button title="Sign In" color="#7D8797" textColor='white' onPress={() => navigation.navigate('SignIn')} />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 24,
    backgroundColor: '#92E3A9',
    flex: 1,
  },
  text:{
    color:'#112340',
    fontSize: 28,
    fontFamily: 'Montserrat-SemiBold',
  },
  contentWrapper: {
      paddingHorizontal: 24,
      paddingTop: 26,
      marginTop: 24,
  },
});