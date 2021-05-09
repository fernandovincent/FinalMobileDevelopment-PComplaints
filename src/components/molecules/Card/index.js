import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = ({name, tanggalKejadian, isiLaporan}) => {
  return (
    <View style={styles.card}>
      {/* <Image style={styles.image} source={{uri: `${imageUrl}`}} /> */}
      <View style={styles.cardWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{tanggalKejadian}</Text>
        <Text style={styles.email}>{isiLaporan}</Text>
      </View>
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 8,
    margin: 15,
  },
  cardWrapper: {
    padding: 11,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 10,
    paddingHorizontal: 5,
  },
  email: {
    fontFamily: 'Montserrat-Light',
    fontSize: 16,
    color: 'grey',
    paddingHorizontal: 16,
  },
  image: {
    height: 100, 
    width: 100,
    marginTop: 10,
    borderRadius: 100,
  },
})