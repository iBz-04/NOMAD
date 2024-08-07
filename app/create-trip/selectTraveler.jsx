import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import {SelectTravelsList} from './../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard';
import {CreateTripContext} from './../../context/CreateTripContext'

export default function selectTraveler() {

    const navigation= useNavigation();
    const[selectedTraveler, setSelectedTraveler] = useState();
    const {tripData, setTripData}=useContext(CreateTripContext);

    useEffect(()=> {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, []);

    useEffect(() => {
      console.log(tripData);
    }, [selectedTraveler])

    useEffect(() => {
      setTripData({...tripData, 
        travelerCount: selectedTraveler 
      })
    }, [])


  return (
    <View style ={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: '100%',
        gap: 16,
    }}>
      <Text style= {{
            fontFamily: 'outfit-bold',
            fontSize: 30,
            textAlign: 'center',
            marginTop: 35
        }}> Who's Traveling?</Text>

        <View>
          <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 22,
            textAlign: 'center',
          }}>
            Choose One
          </Text>

          <FlatList
          data= {SelectTravelsList} 
          renderItem={({item, index})=>(
            <TouchableOpacity 
            onPress={()=>setSelectedTraveler(item)}
            style={{
              marginVertical: 10
            }}>
              <OptionCard option={item} selectedTraveler={selectedTraveler}></OptionCard>
            </TouchableOpacity>
          )}>

          </FlatList>
        </View>
    </View>
  )
}