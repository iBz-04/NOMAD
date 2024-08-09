import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { useEffect, useContext } from 'react';
import { Colors } from '../../constants/Colors';
import CalendarPicker from "react-native-calendar-picker";
import { useState } from 'react';
import moment from 'moment';
import {CreateTripContext} from './../../context/CreateTripContext'


export default function SelectDates() {

    const [startDate, setStartDate] =useState();
    const [endDate, setEndDate] = useState();
    const {tripData, setTripData}=useContext(CreateTripContext);

    const router = useRouter();

    const navigation= useNavigation();
 

    useEffect(()=> {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, []);

    const onDateChange = (date, type) =>{
      console.log(date, type)
      if(type=='START_DATE'){
        setStartDate(moment(date))
      }
      else {
        setEndDate(moment(date))
      }
    }
    const OnDateSelectionContinue = () => {

      if (!startDate&&!endDate) {
        ToastAndroid.show('Please choose a Date', ToastAndroid.LONG)
        return ;
      }
      const totalNoOfDays=endDate.diff(startDate, 'days');
      console.log(totalNoOfDays + 1);
      setTripData({
        ...tripData,
        startDate: startDate,
        endDate: endDate,
        totalNoOfDays: totalNoOfDays + 1
      });

      router.push('/create-trip/select-budget')
    }

  return (
    <View style={{
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
      }}>Choose date</Text>

      <View style={{
        marginTop: 30
      }}>
      <CalendarPicker 
       onDateChange={onDateChange} 
       allowRangeSelection={true}
       minDate={new Date()}
       maxRangeDuration={5}
       selectedRangeStyle={{
        backgroundColor: Colors.PRIMARY
       }}
       selectedDayTextStyle={{
        color: Colors.WHITE
       }}
       />
      </View>

      <TouchableOpacity 
      onPress={OnDateSelectionContinue}
      style={{
        padding: 18,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 275

      }}>
        <Text style={{
          fontSize: 18,
          fontStyle: 'outfit-medium',
          color: Colors.WHITE,
          textAlign: 'center'
        }}>Continue</Text>
      </TouchableOpacity>
   
    </View>
  )
}