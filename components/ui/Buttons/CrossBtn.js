import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const CrossBtn = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
        <AntDesign name="closecircleo" size={24} color='white' />
    </Pressable>
  )
}

export default CrossBtn