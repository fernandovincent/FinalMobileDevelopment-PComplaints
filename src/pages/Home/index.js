import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../../components/molecules/Card';
import firebase from '../../config/Firebase';
import Header2 from '../../components/molecules/Header2';

const Home = () => {

  const [dataLaporan, setDataLaporan] = useState([]);

  useEffect(() => {
    const uid = firebase.auth().currentUser.uid;
    firebase.database().ref(`reports/${uid}`).on("value", (res) => {
      if(res.val()){
        //Ubah menjadi array
        //Object.keys mengubah data menjadi array
        const rawData = res.val();
        const usersArr = [];
        Object.keys(rawData).map((item) => {
          usersArr.push({
            id: item,
            ...rawData[item]
          });
        });
        setDataLaporan(usersArr);
      }
    });
  }, []);

  console.log(dataLaporan);

  return (
    <View>
    <ScrollView>
    <Header2 title="Homepage" />
    <View>
      {dataLaporan.map(item => (
            <Card
              key={item.id}
              name={item.name}
              tanggalKejadian={item.tanggalKejadian}
              isiLaporan={item.isiLaporan}
            />
          ))}
    </View>
    </ScrollView>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({})