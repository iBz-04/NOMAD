import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {auth, db} from '../../configs/FirebaseConfig'
import UserTripList from '../../components/MyTrips/UserTripList';

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  const user=auth.currentUser;
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    user&&GetMyTrips();
  }, [user])


  const GetMyTrips = async () => {
    setLoading(true);
    setUserTrips([]);  // Clear the state before fetching data
    
    // Correct collection name used instead of userTrips
    const q = query(collection(db, "UserTrips"), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);
  
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prev => [...prev, doc.data()]);
    });
  
    setLoading(false);
  }

  return (
    <View style={{
      padding:25,
      paddingTop: 55,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>

     

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
      }}>
      <Text
      style={{
        fontFamily: 'outfit-bold',
        fontSize: 35
      }}
      >My Trips</Text>
      <MaterialIcons name="add-circle" size={40} color="black" />
      </View>

      {loading&&<ActivityIndicator  size={'large'} color={Colors.PRIMARY}></ActivityIndicator>}

    {userTrips?.length==0?
    <StartNewTripCard/>
    :
    <UserTripList userTrips= {userTrips}></UserTripList>
    }
    </View>
  )
}