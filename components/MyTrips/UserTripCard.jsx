import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors';
import moment from 'moment';

export default function UserTripCard({trip}) {


  //JSON PARSE ERROR MUST BE FIXED
  
  const formatData =(data) => {
    return JSON.parse(data);
  }
  
  return (
    <View 
    style={{
      marginTop: 15,

    }}
    >
      <Image 
      style={{
        width: 100,
        height: 100
      }}
      source={require('./../../assets/images/img_1.jpg')}></Image>

<View>
  <Text>{moment(formatData(trip.tripData).startDate).format('DD MMM YYYY')}</Text>
      </View>

    </View>

  )
}