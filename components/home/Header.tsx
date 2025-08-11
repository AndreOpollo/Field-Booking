import { Image } from 'expo-image'
import { Bell } from 'lucide-react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = () => {
  return (
    <View style = {styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
            <View style={styles.profile}>
                <View style={styles.profileImageContainer}>
                     <Image
                        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3G3o_WUrphCKlkkfYBCu0538eKuBd1_3Tw&s"}}
                        transition={300}
                        placeholder={{}}
                        style={styles.profileImage}
                        contentFit='contain'
                     />
                </View>
                <View>
                    <Text style={styles.profileName}>Hello there,</Text>
                    <Text style={styles.profileName}>Andrew Opollo</Text>
                </View> 
            </View>
            <Bell size={28}/>
        </View>
      </SafeAreaView>  
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'orange',
        paddingHorizontal:24,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:16,
        marginBottom:40

    },
    profile:{
        flexDirection:'row',
        alignItems:'center',
        gap:8

    },
    profileImageContainer:{
        height:45,
        width:45,
    },
    profileImage:{
        height:'100%',
        width:'100%',
        borderRadius:999
    },
    profileName:{
        fontSize:15,
        fontWeight:'700',
        letterSpacing:2.0
    }

})

export default Header