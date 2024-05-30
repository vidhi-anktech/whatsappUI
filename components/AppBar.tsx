import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';

const AppBar = () => {
  return (
    <View style={styles.screenHeader}>
      <Text style={styles.headingText}>
        Messages
      </Text>
      <View style={styles.actionIcon}>
        <Entypo name='dots-three-vertical' size={20} />
      </View>
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
  screenHeader: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  actionIcon: {

  },
})