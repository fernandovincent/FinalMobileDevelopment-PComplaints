import React, { useState, Component } from 'react'
import { ScrollView,StyleSheet, Text, View } from 'react-native'
import { Button, Gap, TextInput, Header2 } from '../../components';
import firebase from '../../config/Firebase';

    const Reports = () => {
      const [name,setName] = useState("")
      const [judulLaporan,setJudulLaporan] = useState("")
      const [isiLaporan,setIsiLaporan] = useState("")
      const [tanggalKejadian , setTanggalKejadian] = useState("")
      const [lokasi, setLokasi] = useState("")
      const [instansi,setInstansi] = useState("")
      const [kategori,setKategori] = useState("")
      
      const onSubmit = () => {
        const uid = firebase.auth().currentUser.uid;
          const data = {
            name:name,
            judulLaporan: judulLaporan,
            isiLaporan: isiLaporan,
            tanggalKejadian: tanggalKejadian,
            lokasi: lokasi,
            instansi: instansi,
            kotageori: kategori,
          };
          console.log(data);
          firebase.database().ref(`reports/${uid}`).push(data);
          resetForm();
        };

    const resetForm =()=>{
      setName("")
      setJudulLaporan("")
      setIsiLaporan("")
      setTanggalKejadian("")
      setLokasi("")
      setInstansi("")
      setKategori("")
    }

    return(
        <View style={styles.page} >
      <Header2 title="Reports" style={styles.titlelap}/>
      <ScrollView showsVerticalScrollIndicator={false} >
      <Gap height={16} />
      <View style={styles.contentWrapper} >
      <TextInput title="Name" placeholder="Type your name" value={name} onChangeText={value => setName(value)} />
      <Gap height={16} />
      <TextInput title="Report Title" placeholder="Type the title of your report" value={judulLaporan} onChangeText={value => setJudulLaporan(value)} />
      <Gap height={16} />
      <TextInput title="Contents of The Report" placeholder="Type the contents of your report" value={isiLaporan} isTextArea = {true} onChangeText={value => setIsiLaporan(value)} />
      <Gap height={16} />
      <TextInput title="Date of Incident" placeholder="Type the date of the incident" value={tanggalKejadian} onChangeText={value => setTanggalKejadian(value)} />
      <Gap height={16} />
      <TextInput title="Location" placeholder="Type the location" value={lokasi} onChangeText={value => setLokasi(value)} />
      <Gap height={16} />
      <TextInput title="Agency" placeholder="Type of agency" value={instansi} onChangeText={value => setInstansi(value)} />
      <Gap height={16} />
      <TextInput title="Category" placeholder="Type the category" value={kategori} onChangeText={value => setKategori(value)} />
      <Gap height={16} />
      <Gap height={16} />
      <Button title="Send Report"  color="#161C37" textColor="white" onPress={onSubmit} />
      <Gap height={16} />
      </View>
      </ScrollView>
        </View>
    );
  }

export default Reports;

const styles = StyleSheet.create({
  page: {
    flex:1,
  },
  text: {
    fontSize: 16,
    color : 'black',
    fontFamily:'Montserrat-SemiBold',
    paddingLeft:4,
  },
  contentWrapper: {
    paddingHorizontal: 24,
  },
  header:{
      backgroundColor:'#92E3A9'
  },
  input :{
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingLeft: 10,
    paddingHorizontal:  10,
  },
  teks:{
    flexDirection: 'row',
    alignItems:'center',
  }
});