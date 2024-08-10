import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useFonts } from "expo-font"
import {Colors} from './../constants/Colors'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Login() {
  const router = useRouter();

  return (

    <View>
      <Image source={require('./../assets/images/home_page.jpg')} 
      style={{
        width: '100%',
        height: 520,
            }}>
        </Image>


        <View style={styles.container}>
           <Text style={{
           fontSize: 40,
           fontFamily: 'outfit-bold', 
           textAlign: 'center',
           marginTop: 20
           }}>NOMAD</Text>

           <Text style={{
            fontFamily: 'outfit',
            fontSize: 17,
            textAlign: 'center',
            color: Colors.GRAY,
            marginTop: 30
           }}>
            Plan The Perfect Trip to any Location in Seconds with Artificial Intelligence
           </Text>

          <Image source={require('./../assets/images/map.jpg')} 
           style={{
            width: '100%',
            height: '12%',
            borderRadius: 35,
            marginTop: 39
            }}>
         </Image>

           <TouchableOpacity  style={styles.button} onPress={()=>router.push('auth/sign-in')}>
            <Text style={{color: '#fff', 
              textAlign: 'center', 
              fontFamily: 'outfit', 
              fontSize: 17}}>
                START NOW</Text>
           </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.WHITE,
    marginTop: -150,
    height: '100%',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    padding: 25
  }, 
  button: {
    borderRadius: 99,
    backgroundColor: '#000',
    padding: 15,
    marginTop: '19%'
  }
})