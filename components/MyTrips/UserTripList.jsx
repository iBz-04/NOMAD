import { View, Text, Image } from 'react-native'
import React from 'react'

export default function UserTripList({userTrips}) {
  return (
    <View>
      <View style={{
        marginTop: 20
      }}>
        <Image source={require('./../../assets/images/placeholder.jpg')}
        style={{
            width: '100%',
            height: 240,
            objectFit: 'cover',
            borderRadius: 15
        }}
        ></Image>
      </View>
    </View>
  )
}