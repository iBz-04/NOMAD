import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { useState } from 'react';
import {SelectBudgetOptions} from './../../constants/Options';

export default function selectBudget() {

    const [selectedOption, setSelectedOption] = useState();

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, [])
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
            <View style={{
                marginVertical: 10
            }}>
                <OptionCard option={item} selectedOption={selectedOption}></OptionCard>
            </View>
        )} >

        </FlatList>
      </View>
    </View>
  )
}