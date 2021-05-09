import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import {Header, List} from '../../components';
import firebase from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const Profile = ({navigation}) => {

  const [profile, setProfile] = useState({});
  const [users, setUsers] = useState({});

  const getUserProfile = () => {
    const uid = firebase.auth().currentUser.uid;
    firebase
    .database()
    .ref(`users/${uid}/`)
    .on('value', res => {
      if(res.val()) {
        setUsers(res.val());
      }
      console.log(users);
      console.log(users.work);
    });
  };

  const getPictures = () => {
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`users/${uid}/`)
      .once('value', res => {
        const photo = `data:image/jpeg;base64, ${res.val().photo}`;
        setProfile({...res.val(), photo: photo});
      });
  };
  
  useEffect(() => {
    getUserProfile();
    getPictures();
  }, []);

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      console.log("Success Sign Out");
      navigation.replace('GetStarted');
    }).catch(error => {
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
    <View>
      <Header title="Profile" onBack={() => navigation.goBack()}/>
      <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.page}>
        <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
        <View style={styles.border}>
        <Image source={{uri: profile.photo}} style={styles.image} />
        </View>
      <View style={styles.view} >
            <Text style={styles.name}>{users.fullName}</Text>
            <Text style={styles.work}>{users.work}</Text>
      </View>
      </View>
    </View>
  </View>
      <List name="Edit Profile" desc="Edit your profile" icon="edit-profile" onPress={() => navigation.navigate('UpdateProfile')} />
      <List name="Logout" desc="Sign out from application" icon="logout" onPress={signOut} />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper :{
    flex : 1,
    backgroundColor : 'white',
    paddingHorizontal : 24,
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
    marginBottom: 16,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90,
  },
  addPhoto: {
    height: 90,
    width: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
    color: "#112340",
  },
  work: {
    fontSize: 16,
    fontFamily: "Montserrat-Light",
    color: "#7D8797",
  },
  image: {
    height: 114,
    width: 115,
    borderRadius: 80,
  },
  view:{
    justifyContent: 'center',
    alignItems: 'center',
  }
});
