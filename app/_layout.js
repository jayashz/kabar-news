import { View, Text } from 'react-native';
import '../global.css';
import React from 'react'
import { Stack, Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index'/>
        <Stack.Screen name='BoardingScreen'/>
    </Stack>
  )
}

export default _layout