import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import moment from 'moment';
import { Colors } from '../../constants/Colors';

export default function UserTripList({userTrips}) {

    useEffect(() => {
        console.log('User Trips:', userTrips);
      }, [userTrips]);

    let LatestTrip;

    try {
      // Try to parse if it's a string
      LatestTrip = typeof userTrips[0].tripData === 'string'
        ? JSON.parse(userTrips[0].tripData)
        : userTrips[0].tripData;
    } catch (error) {
      console.error('Failed to parse tripData:', error);
      LatestTrip = null; // Handle the error as appropriate
    }
  
  
  return userTrips&&(
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

        <View style={{marginTop: 10}}>
            <Text style={{
             fontFamily: 'outfit-medium',
             fontSize: 20,
             color: Colors.PRIMARY

            }}>
              {userTrips[0]?.tripData?.locationInfo?.name}
            </Text>
            <Text style={{
                fontFamily: 'outfit', 
                fontSize: 13,
                color: Colors.GRAY,
                margin: 5
            }}>{moment(LatestTrip.startDate).format('DD MMM YYYY')}</Text>
             <TouchableOpacity style={{
            backgroundColor: Colors.PRIMARY,
            padding: 14,
            borderRadius: 15,
            marginTop: 10
        }}>
            <Text style={{
                color: Colors.WHITE,
                textAlign: 'center',
                fontFamily: 'outfit-medium',
                fontSize: 16
            }}>See Trip</Text>
        </TouchableOpacity>

        
        
        </View>
        {userTrips.map((trip, index)=>(
             <View>
                <Text>
                    {trip.userEmail}
                </Text>
             </View>
          ))}
      </View>
    </View>
  )
}