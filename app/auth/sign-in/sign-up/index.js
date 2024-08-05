import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import {useNavigation, useRouter} from 'expo-router'

export default function SignUp() {
  const navigation = useNavigation();
  useEffect (() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])

  return (
    <View style={{
      padding: 25,
      paddingTop:50
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30
      }}
      >Create New Account</Text>
    </View>
  )
}