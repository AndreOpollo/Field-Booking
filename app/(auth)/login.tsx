import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'expo-router'
import React, { useRef, useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const login = () => {
    const router = useRouter()
    const {login} = useAuth()
    const[loading,setLoading] = useState(false)
    const emailRef = useRef('')
    const passwordRef = useRef('')
    
    const handleRegisterPressed = () =>{
        router.push({
            pathname:'/(auth)/register'
        })
    }
    const handleLoginPressed = async ()=>{
        try {
            setLoading(true)
            await login(emailRef.current,passwordRef.current)
            setLoading(false)

        } catch (error) {
            console.error("Error",error)
            setLoading(false)
            
        }

    }
  return (
   <SafeAreaView style={styles.container}>
         <KeyboardAvoidingView
         behavior={Platform.OS === 'ios'?'padding':'height'}
         style={styles.keyboardAvoid}
         >
           <ScrollView
           keyboardShouldPersistTaps='handled'
           style={styles.scrollContent}>
               <View style={styles.header}>
                   <Text style={styles.title}>Login</Text>
                   <Text style={styles.subtitle}>Sign in to get started</Text>
               </View>
               <View style={styles.form}>
                    <View style={styles.inputContainer}>
                       <TextInput 
                       style={styles.input}
                       placeholder="Email"
                       placeholderTextColor={'#999'}
                       onChangeText={(value)=>emailRef.current = value}
                       autoCorrect={false}
                       autoCapitalize='none'/>
                   </View>
                    <View style={styles.inputContainer}>
                       <TextInput 
                       style={styles.input}
                       placeholder="Password"
                       placeholderTextColor={'#999'}
                       onChangeText={(value)=>passwordRef.current = value}
                       autoCorrect={false}
                       secureTextEntry
                       autoCapitalize='none'/>
                   </View>
                   <TouchableOpacity style={styles.submitButton} onPress={handleLoginPressed} activeOpacity={0.7}>
                       <Text style={styles.submitButtonText}>
                        {
                            loading? "Logging in ...":"Sign In"
                        }
                       </Text>
                   </TouchableOpacity>
               </View>
               <View style={styles.footer}>
                   <Text style={styles.footerText}>Don't have an account? </Text>
                   <TouchableOpacity onPress={handleRegisterPressed}>
                       <Text style={styles.loginLink}>Register</Text>
                   </TouchableOpacity>
               </View>
   
           </ScrollView>
   
         </KeyboardAvoidingView>
       </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fafafa'
    },
    keyboardAvoid:{
        flex:1
    },
    scrollContent:{
        paddingHorizontal:24,
        paddingVertical:32,
        flexGrow:1
    },
    header:{
        alignItems:'center',
        marginBottom:32
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
        color:'#1a1a1a',
        marginBottom:8,
        letterSpacing:1.5
    },
    subtitle:{
        fontSize:16,
        color:'#666',
        letterSpacing:1.2
    },
    form:{
        flex:1
    },
    inputContainer:{
        width:'100%',
        marginBottom:20
    },
    label:{
        fontSize:16,
        fontWeight:'600',
        color:'#333',
        marginBottom:8
    },
    input:{
        height:50,
        width:'100%',
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:8,
        paddingHorizontal:16,
        fontSize:16,
        color:'#333',
        backgroundColor:'#fff'
    },
    submitButton:{
        height:50,
        backgroundColor:'orange',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginTop:12
    },
    submitButtonText:{
        fontSize:16,
        fontWeight:'600',
        letterSpacing:1.1,
        color:'#fff'
    },
    footer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:24
    },
    footerText:{
        fontSize:16,
        color:'#666'
    },
    loginLink:{
        fontSize:16,
        fontWeight:'600',
        color:'orange'
    }
})

export default login