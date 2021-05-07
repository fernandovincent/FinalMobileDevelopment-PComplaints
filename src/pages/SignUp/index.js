import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import { Button, Gap, Header, Loading, TextInput } from '../../components';
import firebase from '../../config/Firebase';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState("");
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoBase64, setPhotoBase64] = useState("");

  const [fullName, setFullName] = useState ('');
  const [work, setWork] = useState('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const [loading, setLoading] = useState(false);

  const getImage = () => {
    launchImageLibrary({maxHeight: 200, maxWidth: 200, includeBase64: true}, (res) => {
        if(res.didCancel){
          setHasPhoto(false);
          showMessage({
            message: "Upload photo dibatalkan",
            type: "default",
            backgroundColor: "#D9435E", // Background Color
            color: "white", // Text Color"
          });
        } else {
          setPhoto(res.uri);
          setPhotoBase64(res.base64);
          setHasPhoto(true);
        }
      },
    );
  };

  const onSubmit = () => {
    setLoading(true);
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      setLoading(false);
      const uid = res.user.uid;
      const data = {
        fullName: fullName,
        email: email,
        work: work,
        photo: photoBase64,
      };
      firebase.database().ref(`users/${uid}`).set(data);
      setFullName("");
      setEmail("");
      setPassword("");
      navigation.replace("mainApp");
    })
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
      <Header title="Sign Up" onBack={() => navigation.goBack()}/>
      <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
          <View style={styles.border}>
            <TouchableOpacity onPress={getImage} activeOpacity={0.7}>
            {
              hasPhoto && <Image source={{uri: photo}} style={styles.avatar} />
            }
            {
            !hasPhoto && (
              <View style={styles.addPhoto}>
                <Text style={styles.addPhotoText}>Add Photo</Text>
              </View>
            )}
            </TouchableOpacity>
          </View>
        </View>
        <TextInput title="Full Name" placeholder="Type your full name" value={fullName} onChangeText={value => setFullName(value)} />
        <Gap height={16} />
        <TextInput title="Work" placeholder="Type your work" value={work} onChangeText={value => setWork(value)} />
        <Gap height={16} />
        <TextInput title="Email" placeholder="Type your email" value={email} onChangeText={value => setEmail(value)} />
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type your password" value={password} onChangeText={value => setPassword(value)} secureTextEntry  />
        <Gap height={50} />
        <Button title="Continue" onPress={onSubmit} color="#161C37" textColor="white" />
      </View>
      </ScrollView>
    </View>
    {
      loading && <Loading />
    }
    </>
  );
};

const styles = StyleSheet.create({
  page :{
    flex: 1,
  },
  contentWrapper :{
    flex : 1,
    backgroundColor : 'white',
    paddingHorizontal : 24,
  },
  addPhoto: {
    height: 90,
    width: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  addPhotoText: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    maxWidth: 40,
    textAlign: 'center',
  },
  border: {
    borderColor: '#8D92A3',
    borderWidth: 1,
    height: 110,
    width: 110,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90,
  },
});

export default SignUp;