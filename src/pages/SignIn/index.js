import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {Logo} from '../../assets';
import { Button, Gap, TextInput, Loading } from '../../components';
import firebase from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const SignIn = ({navigation}) => {

  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => { 
      setLoading(false);
      navigation.replace("mainApp")})
    .catch(error => {
      setLoading(false);
      showMessage({
        message: error.message,
        type: "default",
        backgroundColor: "#D9435E", // Background Color
        color: "white", // Text Color"
      });
    });
  };

  return (
    <>
    <View style={styles.page} >
      <View style={styles.contentWrapper} >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Logo />
          <Gap height={24}/>
          <Text style={styles.text} >Go In and Start Complaining</Text>
          <Gap height={40}/>
          <TextInput title="Email" placeholder="Type your email" value={email} onChangeText={value=>setEmail(value)} />
          <Gap height={24}/>
          <TextInput title="Password" placeholder="Type your password" value={password} onChangeText={value=>setPassword(value)} secureTextEntry />
          <Gap height={66}/>
          <Button title="Sign In" onPress={onSubmit} color="#112340" textColor="white"  />
          <Gap height={10}/>
          <Button title="Create New Account" color="#ffffff" textColor="#7D8797" onPress={ () => navigation.navigate('SignUp')} textDecorationLine="underline" />
        </ScrollView>
      </View>
    </View>
    {
      loading && <Loading />
    }
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex:1,
    padding: 24,
  },
  text: {
    fontSize: 24,
    color : '#112340',
    fontFamily:'Montserrat-SemiBold',
  },
  contentWrapper: {
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,
  },
});