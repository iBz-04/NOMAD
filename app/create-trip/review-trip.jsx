import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useContext  } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import {CreateTripContext} from './../../context/CreateTripContext'
import moment from 'moment';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function reviewTrip() {

  const {tripData, setTripData}=useContext(CreateTripContext);
  const router = useRouter();

  const navigation = useNavigation();
  useEffect (() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
  }, [])

  return (
    <View style={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: Colors.WHITE,
      height: '100%',
      gap: 20
    }}>
      <Text style={{
         fontFamily: 'outfit-bold',
         fontSize: 35,
         marginTop: 20,
         textAlign: 'center'
      }}>Trip Review</Text>

      <View>
        <Text style={{
           fontFamily: 'outfit-medium',
           fontSize: 20,
           color: Colors.GRAY,
           textAlign: 'center'
        }}>Review your trip details</Text>

    
      {/* Destination */}
        <View style={{
          marginTop: 30,
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
          backgroundColor: '#F0F0F0',
          padding: 20,
          marginBottom: 5,
          borderRadius: 10
        }}>
        <Entypo name="location" size={34} color="black" />
        <View>
          <Text style={{
            fontFamily: 'outfit',
            fontSize: 20
          }}>Destination</Text>
          <Text style={{
            color: Colors.GRAY
          }}>{tripData?.locationInfo?.name}</Text>
        </View>
        </View>

        {/* Date */}
        <View style={{
          marginTop: 30,
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
          backgroundColor: '#F0F0F0',
          padding: 20,
          marginBottom: 5,
          borderRadius: 10
        }}>
        <MaterialIcons name="date-range" size={34} color="black" />
        <View>
          <Text style={{
            fontFamily: 'outfit',
            fontSize: 20
          }}>Trip Date</Text>
          <Text style={{
            color: Colors.GRAY
          }}>{moment(tripData?.startDate).format('DD MMM') + " - " + moment(tripData?.endDate).format('DD MMM')}</Text>
        </View>
        </View>

           {/* Trip capacity */}
          <View style={{
          marginTop: 30,
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
          backgroundColor: '#F0F0F0',
          padding: 20,
          marginBottom: 5,
          borderRadius: 10
        }}>
        <Ionicons name="people" size={34} color="black" />
        <View>
          <Text style={{
            fontFamily: 'outfit',
            fontSize: 20
          }}>Capacity</Text>
          <Text style={{
            color: Colors.GRAY
          }}>{tripData?.traveler?.title}</Text>
        </View>
        </View>

        
           {/* Budget */}
           <View style={{
          marginTop: 30,
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
          backgroundColor: '#F0F0F0',
          padding: 20,
          marginBottom: 5,
          borderRadius: 10
        }}>
        <AntDesign name="creditcard" size={34} color="black" />
        <View>
          <Text style={{
            fontFamily: 'outfit',
            fontSize: 20
          }}>Budget</Text>
          <Text style={{
            color: Colors.GRAY
          }}>{tripData?.budget}</Text>
        </View>
        </View>
      


      </View>
      
      <TouchableOpacity
      onPress={()=> router.replace('/create-trip/generate-trip')}
        style= {{
          padding: 18,
          backgroundColor: Colors.PRIMARY,
          borderRadius:  15,
          marginTop: 40
        }}>
           
          <Text  style={{
            textAlign: 'center',
            color: Colors.WHITE,
            fontFamily: 'outfit-medium',
            fontSize: 18
          }}
          >Generate trip</Text>
        </TouchableOpacity>
    </View>
  )
}