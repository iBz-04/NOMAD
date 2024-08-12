import { View, Text, Image } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import { Colors } from '../../constants/Colors'
import {CreateTripContext} from './../../context/CreateTripContext'
import {AI_PROMPT} from '../../constants/Options';
import { chatSession } from '../../configs/AiModal';
import { useRouter } from 'expo-router';
import { db } from '../../configs/FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import  {auth} from '../../configs/FirebaseConfig'


export default function GenerateTrip() {
  const {tripData, setTripData}=useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

useEffect (() => {
    GenerateAiTrip()
}, [])

  const GenerateAiTrip=async()=> {

    setLoading(true);
    const FINAL_PROMPT=AI_PROMPT
    .replace('{location}', tripData?.locationInfo?.name)
    .replace('{totalDays}', tripData?.totalNoOfDays)
    .replace('{totalNight}', tripData?.totalNoOfDays-1)
    .replace('{traveler}', tripData?.traveler?.title)
    .replace('{budget}', tripData?.budget)
    .replace('{totalDays}', tripData?.totalNoOfDays)
    .replace('{totalNight}', tripData?.totalNoOfDays-1);

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    const tripResp = JSON.parse(result.response.text());

    setLoading(false)
    const docId =(Date.now()).toString();
    const result_= await setDoc(doc(db, "UserTrips", docId), {
      userEmail: user.email,
      tripPlan:tripResp, // gemini response
      tripData: JSON.stringify(tripData),
      docId:docId

    })
    console.log("Trip generated, navigating to My Trips page...");
    router.push('./../(tabs)/mytrip');

    // router.replace('(tabs)/mytrip');
  }

  return (
    <View style={{
      padding: 25,
      paddingTop: 80,
      backgroundColor: Colors.WHITE,
      height: '100%',
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize: 35,
        textAlign: 'center'
      }}>
        Hold On
      </Text>

      <Text style={{
        fontFamily:'outfit-medium',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.GRAY,
        marginTop: 15
      }}>
        Trip is being generated ...
      </Text>

    <View style={{
       paddingTop: 120,
       alignContent: 'center',
    }}>
      <Image style={{
        width: '100',
        height: 400,
      
        objectFit: 'contain',
        resizeMode: 'contain'
      }} source={require('./../../assets/images/main_load.gif')}></Image>
      </View>
    </View>
  )
}