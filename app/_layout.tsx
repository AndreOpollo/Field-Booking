import { AuthContextProvider, useAuth } from '@/hooks/useAuth';
import { useFonts } from 'expo-font';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';



 function MainLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const {isAuthenticated}= useAuth()
  const segments = useSegments()
  const router = useRouter()
    useEffect(()=>{
    if(typeof isAuthenticated ==='undefined') return
    const inTabs = segments[0]=='(tabs)'
    if(isAuthenticated && !inTabs){
      router.replace('/(tabs)')
    } else if(isAuthenticated===false){
      router.replace('/(auth)/login')
    }


  },[isAuthenticated])

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }



  return (
    <>
      <Stack>
        <Stack.Screen name='(auth)' options={{headerShown:false}}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name='field-detail/[id]' options={{headerShown:false}}/>
        <Stack.Screen name='book-detail/[id]' options={{headerShown:false}}/>
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

export default function RootLayout(){
  return (
    <AuthContextProvider>
      <MainLayout/>
    </AuthContextProvider>
  )
}
