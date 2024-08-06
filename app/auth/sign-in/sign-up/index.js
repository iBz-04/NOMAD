import { View, Text, StyleSheet, TextInput, ToastAndroid } from 'react-native'
import React, {useEffect, useState} from 'react'
import {useNavigation, useRouter} from 'expo-router'
import {Colors} from './../../../../constants/Colors'
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import {auth} from './../../../../configs/FirebaseConfig'


export default function SignUp() {
  const router = useRouter();
  const navigation = useNavigation();

  const [email, setEmail]=useState();
  const [password, setPassword]=useState();
  const [FullName, setFullName]=useState();

  useEffect (() => {
    navigation.setOptions({
        headerShown: false
    })
}, []);

const OnCreateAccount= () => {
  if(!email&&!password&&!FullName) {
    ToastAndroid.show('Please enter all details', ToastAndroid.BOTTOM);
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("--", errorMessage, errorCode);
    // ..
  });
}

  return (

    <View style={{
      padding: 25,
      paddingTop: 80,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <TouchableOpacity onPress = {()=>router.back()}>
             <Ionicons name="arrow-back-circle" size={34.5} color="black" />
       </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 35
      }}
      >Create New Account</Text>

       {/* fullname */}
       <View style={{
            marginTop: 50
        }}>
            <Text style={{
                fontFamily: 'outfit'
            }}>Full Name</Text>
            <TextInput 
            style={styles.input}
            placeholder='Enter Full Name'
            onChangeText={(value) => setFullName(value)}
            ></TextInput>
        </View>

        {/* Email */}
        <View style={{
            marginTop: 30
        }}>
            <Text style={{
                fontFamily: 'outfit'
            }}>Email</Text>
            <TextInput 
            style={styles.input}
            placeholder='Enter Email'
            onChangeText={(value) => setEmail(value)}></TextInput>
        </View>

        {/* password */}
        <View style={{
            marginTop: 30
        }}>
            <Text style={{
                fontFamily: 'outfit'
            }}>Password</Text>
            <TextInput 
            secureTextEntry={true}
            style={styles.input}
            placeholder='Enter Password'
            onChangeText={(value) => setPassword(value)}
            ></TextInput>
        </View>
         {/* Create Account button */}
         <TouchableOpacity onPress={OnCreateAccount} style = {{
            padding:20,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 90
        }}>
            <Text style={{
                color: Colors.WHITE,
                textAlign: 'center'
            }}>Create Account</Text>
        </TouchableOpacity>

         {/* Sign in button */}
         <TouchableOpacity 
         onPress={()=>router.replace('../../sign-in')}
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
            }}>Sign in</Text>
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
  fontFamily: 'outfit',
  color: Colors.GRAY
}})