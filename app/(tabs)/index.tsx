import FieldSection from '@/components/home/FieldSection'
import Header from '@/components/home/Header'
import SearchBar from '@/components/home/SearchBar'
import SportsTab from '@/components/home/SportsTab'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
        <Header/>
        <SearchBar/>
        <SportsTab/>
        <FieldSection/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
export default Home