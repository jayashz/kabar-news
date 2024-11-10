
import '../global.css';
import React from 'react'
import { Stack, Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index'/>
        <Stack.Screen name='BoardingScreen'/>
        <Stack.Screen name='(auth)'/>
    </Stack>
  )
}

export default _layout