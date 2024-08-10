import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function GenerateTrip() {
  return (
    <View style={{
      padding: 25,
      paddingTop: 80,
      backgroundColor: Colors.WHITE,
      height: '100%',
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize: 35,
        textAlign: 'center'
      }}>
        Hold On
      </Text>

      <Text style={{
        fontFamily:'outfit-medium',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.GRAY,
        marginTop: 15
      }}>
        Trip is being generated ...
      </Text>

    <View style={{
       paddingTop: 120,
       alignContent: 'center',
    }}>
      <Image style={{
        width: '100',
        height: 400,
      
        objectFit: 'contain',
        resizeMode: 'contain'
      }} source={require('./../../assets/images/main_load.gif')}></Image>
      </View>
    </View>
  )
}