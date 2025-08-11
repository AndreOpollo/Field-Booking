import { Tabs } from 'expo-router'
import { Home, User } from 'lucide-react-native'
import React from 'react'

const TabLayout = () => {
  return (
    <Tabs screenOptions={({route})=>({
        tabBarIcon:({color,size})=>{
            switch(route.name){
                case 'index':
                    return <Home color={color} size={size}/>
                case 'profile':
                    return <User color={color} size={size}/>
                default:
                    return null
            }
        },
        tabBarActiveTintColor:'orange',
        tabBarInactiveTintColor:'gray',
        headerShown:false
    })}>
        <Tabs.Screen name='index' options={{title:'Home'}}/>
        <Tabs.Screen name='profile' options={{title:'Profile'}}/>
    </Tabs>
  )
}

export default TabLayout