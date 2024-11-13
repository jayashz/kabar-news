import { View, Text, Pressable } from 'react-native'
import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import { useNavigation } from 'expo-router';
const NotificationBtn = () => {
    const navigation = useNavigation();
  return (
    <Pressable onPress={()=>navigation.navigate('Notification')}>
        <Octicons name="bell" size={24} color="black" />
    </Pressable>
  )
}

export default NotificationBtn