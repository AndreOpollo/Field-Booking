import { Search, Settings2 } from 'lucide-react-native'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Search'
      style={styles.searchInput}
      />
      <Search style={styles.searchIcon} size={18}/>
      <Settings2 style={styles.filterIcon}/>
      <View style={styles.divider}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        marginTop:-24,
        paddingHorizontal:24,
    },
    searchInput:{
        width:"100%",
        backgroundColor:'white',
        borderRadius:12,
        paddingVertical:18,
        paddingLeft:36,
        fontSize:15,
        fontWeight:'700'
    },
    searchIcon:{
        position:'absolute',
        left:32,
        top:18
    },
    filterIcon:{
        position:'absolute',
        right:40,
        top:14
    },
    divider:{
        backgroundColor:'lightgray',height:50,
        width:1,
        right:72,
        top:2,
        position:'absolute'
    }
})

export default SearchBar