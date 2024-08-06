import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY            
    }} >
        <Tabs.Screen name="mytrip"
        options={{
          tabBarLabel: 'My Trips',
          tabBarIcon: ({color}) => <Entypo name="location" size={24} color={color} />
        }}
        ></Tabs.Screen>
        <Tabs.Screen name="discover"
         options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({color}) => <AntDesign name="earth" size={24} color={color} />
        }}
        ></Tabs.Screen>
        <Tabs.Screen name="profile"
         options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Ionicons name="person" size={24} color={color} />
        }}
        ></Tabs.Screen>
    </Tabs>
  )
}