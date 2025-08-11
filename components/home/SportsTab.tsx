import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const tabs =[
  { emoji: "🥎", name: "Tennis" },
  { emoji: "🏀", name: "Basketball" },
  { emoji: "⚽", name: "Football" },
  { emoji: "🏈", name: "Rugby" },
  { emoji: "🏑", name: "Field Hockey" },
  { emoji: "🏸", name: "Badminton" },
]
const SportsTab = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:20}} decelerationRate={'fast'} snapToAlignment='start' snapToInterval={75}>
        {
          tabs.map((tab,index)=>(
            <View key={index} style={styles.tabItem}>
              <View style={styles.emojiContainer}>
                <Text style={{fontSize:24}}>{tab.emoji}</Text>
              </View>
              <Text style={styles.name}>{tab.name}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:24
  },
  tabItem:{
    alignItems:'center',
    gap:10,
    marginHorizontal:10
  },
  emojiContainer:{
    borderRadius:999,
    backgroundColor:"lightgray",
    width:55,
    height:55,
    alignItems:'center',
    justifyContent:'center'
  },
  name:{
    fontSize:15,
    fontWeight:'600',
    letterSpacing:1
  }
})

export default SportsTab