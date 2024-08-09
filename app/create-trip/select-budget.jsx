import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { useState } from 'react';
import {SelectBudgetOptions} from './../../constants/Options';
import {CreateTripContext} from './../../context/CreateTripContext'

export default function selectBudget() {

    const [selectedOption, setSelectedOption] = useState();
    const {tripData, setTripData}=useContext(CreateTripContext);
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, []);

    useEffect(() => {
        
        selectedOption&&setTripData({
            ...tripData,
            budget: selectedOption?.title
        })
    }, [selectedOption])

    const onClickContinue=()=> {
        if (!selectedOption){
            ToastAndroid.show('Select a budget', ToastAndroid.LONG);
            return ;
        }

        router.push('/create-trip/review-trip');
    }


  return (
    <View style = {{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: '100%'
    }}>
      <Text style={{
         fontFamily: 'outfit-bold',
         fontSize: 35,
         marginTop: 20,
         textAlign: 'center'
      }}>Budget</Text>

      <View style={{
        marginTop: 20
      }}>
        <Text style={{
             fontFamily: 'outfit-medium',
             fontSize: 20,
             color: Colors.GRAY,
             textAlign: 'center',
        }}>Select expenditure plan </Text>

        <FlatList data={SelectBudgetOptions}
        renderItem={({item, index})=>(
            <TouchableOpacity
            onPress={() =>setSelectedOption(item)}
            style={{
                marginVertical: 15
            }}>
                <OptionCard option={item} selectedOption={selectedOption}></OptionCard>
            </TouchableOpacity >
        )} >

        </FlatList>
      </View>

      <TouchableOpacity
      onPress={()=> onClickContinue()}
        style= {{
          padding: 18,
          backgroundColor: Colors.PRIMARY,
          borderRadius:  15,
          marginTop: 170
        }}>
           
          <Text  style={{
            textAlign: 'center',
            color: Colors.WHITE,
            fontFamily: 'outfit-medium',
            fontSize: 18
          }}
          >Continue</Text>
        </TouchableOpacity>
    </View>
  )
}