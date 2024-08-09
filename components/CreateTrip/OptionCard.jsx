import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function OptionCard({option, selectedOption}) {
  return (
    <View  style={[{
        marginTop: 15,
        padding: 22,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        borderRadius: 15

      }, selectedOption?.id==option?.id&&{borderWidth:1.5}]}>
        <View>
            <Text style={{
        fontSize: 20,
        fontFamily: 'outfit-bold'
      
      }} >{option?.title}</Text>

<Text style={{
        fontSize: 17,
        fontFamily: 'outfit',
        color: Colors.GRAY
      }} >{option?.desc}</Text>
        </View>
      <Text>{option?.icon}</Text>
    </View>
  )
}