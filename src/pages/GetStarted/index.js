import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../components/atoms/button';
import Gap from '../../components/atoms/Gap'

const GetStarted = () => {
  return (
    <View style={styles.page}>
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
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#92E3A9',
    flex: 1,
    //alignItems: 'center',
    //ustifyContent: 'center',
  },
  text: {
    marginTop: 50,
    marginLeft: 25,
    color: '#112340',
    fontSize: 28,
    fontFamily: 'Montserrat-SemiBold',
  },
});
