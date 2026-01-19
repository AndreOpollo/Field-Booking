import { db } from '@/config/firebase'
import { FlashList } from '@shopify/flash-list'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import FieldCard from './FieldCard'
import { Field } from './types'




const FieldSection = () => {
  const[fields,setFields] =useState<Field[]>([])

  useEffect(()=>{
    addFields()
  },[])
  
  const addFields = async ()=>{
    try {
      const querySnapshot = await getDocs(collection(db,"fields"))
      const fetchedFields:Field[] = querySnapshot.docs.map((doc)=>({
        id:doc.id,
        ...(doc.data() as Omit<Field,'id'>)
      })) 

      setFields(fetchedFields)
    } catch (error) {
      console.error("Failed to fetch fields",error)
      
    }
  }
  const renderItem = ({item,index}:{item:Field,index:number})=>(
        <FieldCard field={item} index={index}/>
    )
  return (
    <View>
      <FlashList
      data={fields}
      renderItem={renderItem}
      estimatedItemSize={300}
      />
    </View>
  )
}

export default FieldSection