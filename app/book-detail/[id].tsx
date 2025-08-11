import Header from '@/components/book-detail/Header'
import { Image } from 'expo-image'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Clock3 } from 'lucide-react-native'
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BookingDetails = () => {
    const {id,name,image,time,price} = useLocalSearchParams<{
        id:string,
        name:string,
        image:string,
        time:string,
        price:string
    }>()
    const imageArray = image ? JSON.parse(image as string):[]

    const tax =  Number(price) * 0.030
    const total = Number(price) + tax  
    const router = useRouter()
    
    const handleBackPress = ()=>{
        router.back()
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Header onBackPress={handleBackPress}/>
        <View style={styles.fieldContainer}>
            <View style={styles.imageContainer}>
                <Image
                source={{uri:imageArray[0]}}
                style={styles.image}
                contentFit='cover'
                transition={300}
                placeholder={{}}/>
            </View>
            <View style={{flexDirection:'column',gap:8,
             }}>
                <Text style={{fontSize:18,fontWeight:'600',letterSpacing:1.5}}>{name}</Text>
                <View style={{flexDirection:'row',gap:8,alignItems:'center'}}>
                    <Clock3 size={16} color={'gray'}/>
                    <Text style={{fontSize:13,color:'gray',fontWeight:'500',letterSpacing:1.1}}>{time}</Text>
                </View>
                <Text style={{fontSize:18,fontWeight:'700',letterSpacing:1.2}}>${price}</Text>
            </View>
        </View>
        <View style={styles.divider}/>
        <View style={styles.bookingContainer}>
            <Text style={styles.bookingContainerTitle}>Your Booking</Text>
            <View style={styles.bookingItem}>
                <View style={styles.booking}>
                    <Text style={styles.bookingTitle}>Dates</Text>
                    <TouchableOpacity>
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.bookingText}>{time.split(",")[0]}, 2025</Text>
            </View>
             <View style={styles.bookingItem}>
                <View style={styles.booking}>
                    <Text style={styles.bookingTitle}>Time</Text>
                    <TouchableOpacity>
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.bookingText}>{time.split(", ")[1]}</Text>
            </View>
             <View style={styles.bookingItem}>
                <View style={styles.booking}>
                    <Text style={styles.bookingTitle}>Sports</Text>
                    <TouchableOpacity>
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.bookingText}>Badminton</Text>
            </View>
        </View>
        <View style={styles.divider}/>
        <View style={{marginHorizontal:16,marginTop:16,gap:14}}>
            <Text style={styles.bookingContainerTitle}>Price Details</Text>
            <View style={styles.priceItem}>
                <Text style={styles.priceTitle}>Subtotal</Text>
                <Text style={[styles.amount,{fontSize:16}]}>${Number(price).toFixed(2)}</Text>
            </View>
            <View style={styles.priceItem}>
                <Text style={styles.priceTitle}>Taxes & Other Fees</Text>
                <Text style={[styles.amount,{fontSize:16}]}>${tax.toFixed(2)}</Text>
            </View>
            <View style={styles.divider}/>
            <View style={styles.priceItem}>
                <Text style={styles.total}>Total</Text>
                <Text style={[styles.amount,{fontSize:18}]}>${total.toFixed(2)}</Text>
            </View>
        </View>
        <View style={styles.divider}/>
        <View style={{marginHorizontal:16,marginTop:16,gap:12,marginBottom:8}}>
            <Text style={styles.bookingContainerTitle}>Cancellation Policy</Text>
            <Text style={{fontSize:15,color:'gray',fontWeight:'500',letterSpacing:1.2}}>Cancellations must be made in writing at least 24 hours in advance.
No refunds will be issued for late cancellations or no-shows.</Text>
        </View>
        <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Confirm & Pay</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    fieldContainer:{
        flexDirection:'row',
        marginHorizontal:16,
        marginTop:16,
        gap:16
    },
    imageContainer:{
        height:120,
        width:150,
        borderRadius:20
    },
    image:{
        height:'100%',
        width:'100%',
        borderRadius:20
    },
    divider:{
        width:'100%',
        backgroundColor:'lightgray',
        opacity:0.4,
        height:1,
        marginTop:20
    },
    bookingContainer:{
        marginHorizontal:16,
        marginTop:16,
        gap:16,
        marginBottom:16
    },
    bookingContainerTitle:{
        fontSize:20,
        fontWeight:'600',
        letterSpacing:1.2
       
    },
    bookingItem:{
        gap:4,
        flexDirection:'column'
    },
    booking:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    editText:{
        fontSize:14,
        textDecorationLine:'underline',
        color:'orange',
        fontWeight:'600',
        letterSpacing:0.5
        
    },
    bookingTitle:{
        fontSize:16,
        fontWeight:'600',
        letterSpacing:1.1
    },
    bookingText:{
        color:'gray',
        letterSpacing:1.2,
        fontSize:13,
        fontWeight:'500'
    },
    priceItem:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    amount:{ 
        fontWeight:'700',
        letterSpacing:0.8
    },
    priceTitle:{
        color:'gray',
        fontWeight:'500',
        letterSpacing:0.8,
        fontSize:14
    },
    total:{
        fontSize:18,
        fontWeight:'700',
        letterSpacing:1.2
    },
    button:{
        backgroundColor:'orange',
        borderRadius:14,
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
})

export default BookingDetails