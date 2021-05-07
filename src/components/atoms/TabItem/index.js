import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconHome, IconHomeActive, IconProfile, IconProfileActive, IconReports, IconReportsActive } from '../../../assets'

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home'){
      return active ? <IconHomeActive /> : <IconHome />
    }
    if (title === "Reports"){
      return active ? <IconReportsActive /> : <IconReports />
    }
    if (title === "Profile"){
      return active ? <IconProfileActive /> : <IconProfile />
    }
    return <IconHome />
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 10,
    color: active ? "#0BCAD4" : "#495A75",
    fontFamily: "Montserrat-Regular",
    marginTop: 4,
  })
});
