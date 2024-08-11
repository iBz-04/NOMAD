import { View, Text, TextInput, StyleSheet, ToastAndroid } from 'react-native'
import React, {useEffect, useState} from 'react'
import {useNavigation, useRouter} from 'expo-router'
import {Colors} from './../../../constants/Colors'
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {  signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import {auth} from './../../../configs/FirebaseConfig'

export default function SignIn() {
    const router = useRouter();
    const navigation = useNavigation();

    const [email, setEmail]=useState();
    const [password, setPassword]=useState();

    useEffect ( ()=>{
      navigation.setOptions({
          headerShown: false
      })
  }, [])

  const onSignIn = () => {

    if(!email&&!password) {
        ToastAndroid.show('Please enter all details', ToastAndroid.BOTTOM);
        return;
      }

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("--", errorMessage, errorCode);
    if (errorCode== 'auth/invalid-credential') {
        ToastAndroid.show('Invalid credentials', ToastAndroid.BOTTOM);
    }
  });
  }

  return (
    <View style= {{
        padding: 25,
        paddingTop: 80,
        backgroundColor: Colors.WHITE,
        // marginTop: 60,
        height: '100%'
    }}>
        <TouchableOpacity onPress = {()=>router.back()}>
             <Ionicons name="arrow-back-circle" size={35} color="black" />
       </TouchableOpacity>
       
        <Text style= {{
            fontFamily: 'outfit-bold',
            fontSize: 30,
            textAlign: 'center',
            marginTop: 35
        }}>Sign In</Text>
          <Text style= {{
            fontFamily: 'outfit',
            fontSize: 18,
            color: Colors.GRAY,
            marginTop: 5,
            textAlign: 'center'
        }}>Welcome Back!</Text>
          <Text style= {{
            fontFamily: 'outfit',
            fontSize: 13,
            color: Colors.GRAY,
            marginTop: 10,
            textAlign: 'center'
        }}>New users must create accounts</Text>

        {/* Email */}
        <View style={{
            marginTop: 50,
        }}>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 15,
                marginBottom: 8
            }}>Email</Text>
            <TextInput 
            style={styles.input}
            placeholder='Enter Email'
            onChangeText={(value) => setEmail(value)}
            ></TextInput>
        </View>

        {/* password */}
        <View style={{
            marginTop: 30
        }}>
            <Text style={{
                 fontFamily: 'outfit-medium',
                 fontSize: 15,
                 marginBottom: 8
            }}>Password</Text>
            <TextInput 
            secureTextEntry={true}
            style={styles.input}
            placeholder='Enter Password'
            onChangeText={(value) => setPassword(value)}
            ></TextInput>
        </View>

        {/* sign-in button */}
        <TouchableOpacity onPress={onSignIn} style = {{
            padding:20,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 100
        }}>
            <Text style={{
                color: Colors.WHITE,
                textAlign: 'center'
            }}>Sign In</Text>
        </TouchableOpacity>

         {/* create account button */}
         <TouchableOpacity 
         onPress={()=>router.replace('./sign-up')}
          style = {{
            padding:20,
            backgroundColor: Colors.WHITE,
            borderRadius: 15,
            marginTop: 20,
            borderWidth: 1
        }}>
            <Text style={{
                color: Colors.PRIMARY,
                textAlign: 'center'
            }}>Create Account</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        fontFamily: 'outfit'
    }
})