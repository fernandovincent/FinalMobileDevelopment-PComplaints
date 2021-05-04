import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {Logo} from '../../assets'
import { Button, Gap, TextInput } from '../../components';
import firebase from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message'




const SignIn = ({navigation}) => {

  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const onSubmit = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => navigation.navigate('Beranda')).catch(eror => showMessage({
      message : error.message,
      type: "default",
      backgroundColor : "#D9435E",
      color : "white",
    }));
  }


  return (
    <View style={styles.page} >
      <View style={styles.contentWrapper} >
      <ScrollView showsHorizontalScrollIndicator={false}>
      <Logo />
      <Gap height={14}/>
      <Text style={styles.text} >Go In and Start Complaining</Text>
      <Gap height={24}/>
      <TextInput title="Email" placeholder="Type your email" value={email} onChangeText={value=>setEmail(value)} />
      <Gap height={16}/>
      <TextInput title="Password" placeholder="Type your password" value={password} onChangeText={value=>setPassword(value)} />
      <Gap height={100}/>
      <Button title="Sign In" onPress={onSubmit}  />
      <Gap height={16}/>
      <Button title="Create New Account" color="#fff" textColor="black" onPress={ () => navigation.navigate('SignUp')} />
      </ScrollView>
      
      
      
      </View>
    </View>
  )
}

export default SignIn;

const styles = StyleSheet.create({
  page :{
    flex:1,
    padding: 24,
  },
  text :{
    fontSize: 24,
    color : '#112340',
    fontFamily:'Montserrat-SemiBold',
  },
  contentWrapper:{
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,
  },
})