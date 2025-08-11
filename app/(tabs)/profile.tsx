import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PagerView from 'react-native-pager-view'

const Profile = () => {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.pagerContainer} key={1}>
          <Text>Page 1</Text>
        </View>
        <View style={styles.pagerContainer} key={2}>
          <Text>Page 2</Text>
        </View>
        <View style={styles.pagerContainer} key={3}>
          <Text>Page 3</Text>
        </View>
      </PagerView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  pagerContainer:{
    justifyContent:'center',
    alignItems:'center'
  }
})

export default Profile