import { ChevronLeft } from 'lucide-react-native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Header = ({onBackPress}:{onBackPress:()=>void}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <TouchableOpacity onPress={onBackPress} activeOpacity={0.8}>
                <ChevronLeft size={32}/>
            </TouchableOpacity>
            <Text style={styles.title}>Confirm and Pay</Text>
            <View/>
        </View>  
        <View style={styles.divider}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:12,
        marginTop:8,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        letterSpacing:0.8
    },
    divider:{
        width:'100%',
        height:2.5,
        backgroundColor:'lightgray',
        marginTop:12,
        opacity:0.4
    }
})

export default Header