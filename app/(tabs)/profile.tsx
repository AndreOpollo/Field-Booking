
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Profile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Click</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  pagerContainer:{
    justifyContent:'center',
    alignItems:'center'
  }
})

export default Profile