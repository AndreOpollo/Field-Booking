import { Image } from 'expo-image'
import { router } from 'expo-router'
import { Clock3, Heart, Star, StarIcon } from 'lucide-react-native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Field } from './types'


interface FieldCardProps {
  field: Field,
  index:number
}

const tags = [
    {name:'Badminton',color:'cyan'},
    {name:'Football',color:'yellow'},
    {name:'Table Tennis',color:'orange'},
    {name:'Tennis',color:'green'}
]
const FieldCard:React.FC<FieldCardProps>= ({field,index}) => {

  const handlePress = ()=>{
    router.push({
        pathname:'/field-detail/[id]',
        params:{
            id: field.id,
            name:field.location,
            image: JSON.stringify(field.image),
            time:field.time,
            price:field.price,
            tag:`field-image-${field.id}`,
            location:field.location,
            extras:JSON.stringify(field.extras)
        }
    })
  }  
  const filledIcons = field.rating
  const unfilledIcons = 5 - field.rating
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8} style={styles.container}>
      <View style={styles.fieldContainer}>
        <View style={styles.imageContainer}>
            <Image
            source={{uri:field.image[0]}}
            contentFit='cover'
            style={{
                height:'100%',
                width:"100%",
                borderRadius:18
            }}/>
            <View style={styles.likeButton}>
                <Heart size={24} color={'black'}/>
            </View>
            <View style={styles.price}>
                <Text style={styles.priceText}>${field.price}</Text>
            </View>
        </View>
        <View style={styles.description}>
            <View style={styles.title}>
                <Text style={styles.location}>{field.location.slice(0,22)}...</Text>
                <View style={{flexDirection:'row',gap:2}}>
                    {
                        Array.from({length:field.rating}).map((_,i)=>(
                            <Star key={`filled-${i}`}fill='#a91414' size={16}/>
                        ))
                    }
                    {
                        Array.from({length:5-field.rating}).map((_,i)=>(
                            <StarIcon  key={`unfilled-${i}`}color="#a91414" size={16}/>

                        ))
                    }
                </View>
            </View>
            <View style={styles.time}>
                <Clock3 size={16} color={'gray'}/>
                <Text style={styles.timeText}>{field.time}</Text>
            </View>
            <View style={styles.tagContainer}>
                {
                    field.gameTags.map((tag,index)=>(
                        <View key={index} style={[styles.tagItem,{backgroundColor:tag.color}]}>
                            <Text style={styles.tagName}>{tag.name}</Text>
                        </View>
                    ))
                }                
            </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        marginHorizontal:20,
        backgroundColor:'white',
        borderRadius:18
    },
    imageContainer:{
        height:190,
        backgroundColor:'red',
        borderRadius:18
    },
    price:{
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'orange',
        height:35,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        borderBottomRightRadius:18,
        borderTopLeftRadius:18
        
    },
    priceText:{
       fontSize:16,
       fontWeight:'700',
       color:'white'
    },
    likeButton:{
        position:'absolute',
        left:20,
        top:10,
        backgroundColor:'#fff',
        borderRadius:20,
        width:35,
        height:35,
        alignItems:'center',
        justifyContent:'center'
    },
    description:{
        flexDirection:'column',
        marginHorizontal:12,
        marginBottom:18,
        gap:6
    },
    title:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    fieldContainer:{
        gap:16,
    },
    location:{
        fontSize:17,
        fontWeight:'700',
        letterSpacing: 2.5
    },
    time:{
        flexDirection:'row',
        gap:6,
        alignItems:'center'
    },
    timeText:{
        fontSize:13,
        fontWeight:'500',
        color:'gray',
        letterSpacing:1.1
    },
    tagContainer:{
        flexDirection:'row',
        marginTop: 12,
        gap:16
    },
    tagItem:{
        paddingVertical:4,
        borderRadius:20,
        paddingHorizontal:8
    },
    tagName:{
        fontSize:11,
        fontWeight:'medium',
        color:'black'

    }
})

export default FieldCard