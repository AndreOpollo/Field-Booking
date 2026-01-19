import { Image } from 'expo-image'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Check, ChevronLeft, Dot, DotIcon, Forward, Heart, MapPin, Star } from 'lucide-react-native'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PagerView from 'react-native-pager-view'
import { SafeAreaView } from 'react-native-safe-area-context'

const sports =[
  { emoji: "🥎", name: "Tennis" },
  { emoji: "🏀", name: "Basketball" },
  { emoji: "⚽", name: "Football" },
  { emoji: "🏈", name: "Rugby" },
  { emoji: "🏑", name: "Field Hockey" },
  { emoji: "🏸", name: "Badminton" },
]
const extras = ["CCTV Camera", "Parking", "Lockers", "Washroom","Free WiFi"]



const FieldDetails = () => {
    const {id,name,image,time,price,location,extras} = useLocalSearchParams<{
        id:string,
        name:string,
        image:string,
        time:string,
        price:string,
        location:string,
        extras:string
    }>()
    const router = useRouter()
    const imageArray = image ? JSON.parse(image as string) : []
        const extrasArray = extras ? JSON.parse(extras as string):[]
    const[currentPage,setCurrentPage] =useState(0)

   

    const handlePress = () =>{
        router.push({
            pathname:'/book-detail/[id]',
            params:{
                id,
                name,
                image,
                time,
                price
            }
        })
    }

  return (
    <ScrollView style={styles.container}>
      <View style={{height:300}}>
        <PagerView 
        style={{flex:1}}
        initialPage={0}
        onPageSelected={(e)=>setCurrentPage(e.nativeEvent.position)}>
            {
                imageArray.map((item:string,index:number)=>(
                    <Image 
                    key={index}
        source={{uri:item}}
        contentFit='cover'
        style={{
            height:'100%',
            width:'100%'
        }}
        transition={300}
        placeholder={{}}
        />
                ))
            }

        </PagerView>
        <SafeAreaView style={styles.imageButtonsContainer}>
            <TouchableOpacity style={styles.imageButton} onPress={()=>router.back()}>
                <ChevronLeft/>                
            </TouchableOpacity>
            <View style={{flexDirection:'row',gap:8}}>
                <TouchableOpacity style={styles.imageButton}>
                    <Heart />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton}>
                    <Forward />

                </TouchableOpacity>
            </View>
        </SafeAreaView>
        {
            imageArray.length>1 && (
                <View style={styles.dotIndicatorContainer}>
                    {
                        imageArray.map((_:string,index:number)=>(
                            <View 
                            key={index}
                            style={[
                                styles.dotIndicator,
                                currentPage === index ? styles.activeDot:styles.inactiveDot                                
                            ]}
                            />
                        ))
                    }
                </View>
            )
        }
      </View>  
      <View style={styles.description}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.locationInfo}>
            <View style={styles.locationInfoItem}>
                <MapPin size={18}/>
                <Text style={styles.locationInfoText}>Oval London, England</Text>
                <Dot />
            </View>
            <View style={styles.locationInfoItem}>
                <Star size={18}/>
                <Text style={styles.locationInfoText}>4.95</Text>
                <Dot/>
            </View>
            <View>
                <Text style={styles.locationInfoText}>22 review</Text>
            </View>
        </View>
        <View style={styles.divider}/>
        <View style={styles.priceInfo}>
            <Text style={{fontSize:26,fontWeight:'600'}}>${price}</Text>
            <DotIcon/>
            <Text style={{fontWeight:'500',letterSpacing:1.2,color:'gray'}}>16 Aug 11-12:30pm</Text>
        </View>
        <View style={styles.divider}/>
        <View style={styles.extras}>
            {
                extrasArray.map((item:string,index:number)=>(
                <View style={styles.extrasItem} key={index}>
                    <Check color={'orange'} size={17} strokeWidth={3.0}/>
                    <Text style={{fontSize:14,fontWeight:'500',letterSpacing:0.8}}>{item}</Text>
                </View>

                ))
            }
        </View>
        <View style={styles.divider}/>
        <View>
            <Text style={{fontSize:18,fontWeight:'700',letterSpacing:1.5}}>Sport Type</Text>
            <View style={styles.sports}>
            {
                sports.map((item,index)=>(
                    <TouchableOpacity key={index} style={styles.sportsItem}>
                        <Text>{item.emoji}</Text>
                        <Text style={styles.sportText}>{item.name}</Text>
                    </TouchableOpacity>
                ))
            }
            </View>
        </View>
      </View>
      <SafeAreaView>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>   
      </SafeAreaView>      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    name:{
        fontSize:24,
        fontWeight:'bold',
        letterSpacing:2.5
    },
    description:{
        flexDirection:'column',
        paddingHorizontal:16,
        marginTop:16
    },
    locationInfo:{
        flexDirection:'row',
        gap:8,
        alignItems:'center',
        marginTop:12
    },
    locationInfoItem:{
        flexDirection:'row',
        alignItems:'center',
        gap:4
    },
    locationInfoText:{
        fontWeight:'500',
        letterSpacing:1.2
    },
    priceInfo:{
        flexDirection:'row',
        alignItems:'center',
        gap:4
    },
    divider:{
        width:'100%',
        backgroundColor:'lightgray',
        height:1,
        marginTop:20,
        marginBottom:20
    },
    extras:{
        flexDirection:'row',
        flexWrap:'wrap',
        gap:30        
    },
    extrasItem:{
        flexDirection:'row',
        gap:8,
        width:'28%'
    },
    sports:{
        flexDirection:'row',
        gap:8,
        flexWrap:'wrap',
        marginTop:16
    },
    sportsItem:{
        flexDirection:'row',
        gap:6,
        alignItems:'center',
        borderWidth:1,
        borderColor:'lightgray',
        backgroundColor:'white',
        borderRadius:20,
        paddingHorizontal:12,
        paddingVertical:8
    },
    sportText:{
        fontSize:15,
        fontWeight:'600',
        letterSpacing:1.4
    },
    button:{
        backgroundColor:'orange',
        borderRadius:14,
        marginBottom:8,
        marginHorizontal:16
    },
    buttonText:{
        textAlign:'center',
        paddingVertical:16,
        color:'white',
        fontSize:18,
        fontWeight:'600',
        letterSpacing:1.2
    },
    imageButtonsContainer:{
        flexDirection:'row',
        gap:30,
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        position:'absolute',
        paddingHorizontal:16
    },
    imageButton:{
        height:35,
        width:35,
        borderRadius:999,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    dotIndicatorContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:16,
        gap:6
    },
    dotIndicator:{
        borderRadius:999,
        backgroundColor:'rgba(255,255,255,0.5)'
    },
     activeDot: {
        backgroundColor: 'white',
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    inactiveDot: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: 8,
        height: 8,
        borderRadius: 4,
    }
})

export default FieldDetails