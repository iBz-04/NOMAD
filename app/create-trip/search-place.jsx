import { View, Text } from 'react-native'
import React, {useEffect, useContext} from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from './../../context/CreateTripContext'



export default function SearchPlace() {
  

 const navigation = useNavigation();
 const {tripData, setTripData}=useContext(CreateTripContext);
 const router = useRouter();

 useEffect(() => {
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
    headerTitle: 'Search'
  })
 }, []);

  useEffect(() => {
    console.log(tripData);
  }) , [tripData]

  return (
    <View
    style={{
      padding: 25,
      paddingTop: 100,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}
    >
    
       <GooglePlacesAutocomplete
      placeholder='Search place'

      fetchDetails = {true}
      onFail={error=>console.log(error)}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setTripData({
          locationInfo:{
            name: data.description,
            coordinates:details?.geometry.location,
            photoRef: details.photos[0]?.photo_reference,
            url: details.url
          }
        });
        router.push('/create-trip/selectTraveler')

      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}

      styles={{
        textInputContainer:{
        borderBlockColor: Colors.PRIMARY,
        borderWidth: 2,
        borderRadius: 8,
        marginTop: 6
        },
        textInput: {
          height: 38,
          color: Colors.PRIMARY,
          fontSize: 16,
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
      
    />
   
    </View>
  )
}