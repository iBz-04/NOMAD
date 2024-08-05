import { View, Text, Image, StyleSheet } from 'react-native'
import { useFonts } from "expo-font";
import Colors from './../constants/Colors.ts'
import React from 'react'

export default function Login() {
  return (
    <View>
      <Image source={require('./../assets/images/Login.jpg')} 
      style={{
        width: '100%',
        height: 450 }}>
        </Image>


        <View style={styles.container}>
           <Text style={{
           fontSize:28,
           fontFamily: 'outfit-bold', 
           textAlign: 'center'}}> Traveling Planner</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.WHITE,
    marginTop:-20,
    height: '100%',
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    padding:15
  }
})