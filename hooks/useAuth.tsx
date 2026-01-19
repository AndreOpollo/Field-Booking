import { auth, db } from "@/config/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface CustomUser extends User{
    username:string,
    email:string,
    userId:string
}
interface AuthContextType{
    user: CustomUser|null,
    isAuthenticated: boolean | undefined,
    login:(email:string,password:string)=>Promise<{success:boolean,msg?:string}>,
    register:(email:string,username:string,password:string)=>Promise<{success:boolean,
        data?:User, msg?:string}>,
    logout:()=>Promise<{success:boolean,msg?:string}>    
}

interface AuthProviderProps{
    children:ReactNode
}

export const AuthContext = createContext<AuthContextType|undefined>(undefined)

export const AuthContextProvider:React.FC<AuthProviderProps>=({children})=>{
    const[user,setUser] = useState<CustomUser|null>(null)
    const[isAuthenticated,setIsAuthenticated] = useState<boolean|undefined>(undefined)

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, async (firebaseUser)=>{
            if(firebaseUser){
                const userDocRef = doc(db,"users",firebaseUser.uid)
                const userDoc = await getDoc(userDocRef)
                
                let username = ""
                let email = ""
                if(userDoc.exists()){
                    const userData = userDoc.data()
                    username = userData.username ||""
                    email = userData.email ||""
                }

                const customUser:CustomUser ={
                ...firebaseUser,
                username,
                email,
                userId: firebaseUser.uid
                }

                setIsAuthenticated(true)
                setUser(customUser)
            }else {
                
                setIsAuthenticated(false)
                setUser(null)
            }
        })
        return unsub
    },[])

    const register = async(email:string,username:string,password:string)=>{
        try {
            const response = await createUserWithEmailAndPassword(auth,email,password)
            await setDoc(doc(db,'users',response.user?.uid),{
                username,
                userId:response.user?.uid,
                email
            })
            return {success:true,data:response.user}
        } catch (error:any) {
            console.error(error)
            return {success:false,msg:error.message}
        }
    }
    const login = async(email:string,password:string)=>{
        try {
            await signInWithEmailAndPassword(auth,email,password)
            return {success:true}
            
        } catch (error:any) {
            let msg = error.message
            if(msg.includes('auth/invalid-credentials')) msg = "Invalid Credentials"
            return {success:false,msg}
            
        }
    }
    const logout = async()=>{
        try {
            await signOut(auth)
            return {success:true}
            
        } catch (error:any) {
            console.error("Error",error)
            return {success:false,msg:error.message}
            
        }
    }
    return (
        <AuthContext.Provider value={{user,isAuthenticated,login,register,logout}}>
            {children}
        </AuthContext.Provider>
    )
} 

export const useAuth = ():AuthContextType=>{
    const value = useContext(AuthContext)
    if(!value){
        throw new Error("useAuth must be used within AuthContextProvider")
    }
    return value
}

