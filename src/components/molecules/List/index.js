import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 
import { IconEditProfile, IconLogout, IconNext } from '../../../assets';

const List = ({name, desc, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile'){
      return <IconEditProfile />
    }
    if (icon === 'logout'){
      return <IconLogout />
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
      {/* <Icon /> */}
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <View style={styles.icon}>
      {/* <IconNext />  */}
      </View>
    </TouchableOpacity>
  )
} 

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  content: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    color: "#112340",
    marginRight: 200,
  },
  desc: {
    fontSize: 12,
    fontFamily: "Montserrat-Light",
    color: "#7D8797",
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
