import React from 'react';
<<<<<<< HEAD
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../components/atoms/button';
import Gap from '../../components/atoms/Gap'
=======
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
>>>>>>> upstream/master

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
<<<<<<< HEAD
      <Text style={styles.text}>
        Giving complaints is easier and more flexible
      </Text>
      <Gap height={175} />
      <Button title="Get Started" color="#112340" textColor="white">
        Get Started
      </Button>
      <Button title="Sign In" color="#7D8797" textColor="white">
        Sign In
      </Button>
=======
      <View style={styles.contentWrapper}>
      <Gap height={50} />
        <Text style={styles.text}>Giving complaints is easier and more flexible</Text>
        <Gap height={200} />
        <Button title="Get Started" color="#112340" textColor='white' onPress={() => navigation.navigate('SignUp')} />
        <Gap height={17} />
        <Button title="Sign In" color="#7D8797" textColor='white' onPress={() => navigation.navigate('SignIn')} />
      </View>
>>>>>>> upstream/master
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
<<<<<<< HEAD
  text: {
    marginTop: 50,
    marginLeft: 25,
    color: '#112340',
=======
  text:{
    color:'#112340',
>>>>>>> upstream/master
    fontSize: 28,
    fontFamily: 'Montserrat-SemiBold',
  },
  contentWrapper: {
      paddingHorizontal: 24,
      paddingTop: 26,
      marginTop: 24,
  },
});