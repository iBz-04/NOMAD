import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name="mytrip"></Tabs.Screen>
        <Tabs.Screen name="discover"></Tabs.Screen>
        <Tabs.Screen name="profile"></Tabs.Screen>
    </Tabs>
  )
}