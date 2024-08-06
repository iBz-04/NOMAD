import { View, Text } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


export default function StartNewTripCard() {
const router = useRouter();

  return (
    <View style={{
        padding: 20,
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        gap: 25
    }}>
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={{
        fontSize: 25,
        fontFamily: 'outfit-medium',
        marginTop: 10
      }}>No Trips yet</Text>

<Text style={{
        fontSize: 18,
        fontFamily: 'outfit',
        marginTop: 10,
        textAlign: 'center',
        color: Colors.GRAY
      }}>Start planning your trip now, experience the world!</Text>

      <TouchableOpacity
      onPress={()=> router.push('/create-trip/search-place')}

      style= {{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        paddingHorizontal: 30
      }}
      >

        <Text style={{
            color: Colors.WHITE,
            fontFamily: 'outfit-medium',
            fontSize: 17
        }}>Start a new Trip</Text>
      </TouchableOpacity>
    </View>
  )
}