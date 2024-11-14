import { View, Text } from 'react-native'
import React from 'react'
import { Platform } from "react-native";

const CustomWrapper = ({children}) => {
  return (
    <View className={`flex-1 ${Platform.OS=='android'?'p-[24px]':'px-[24px]'}`}>
        {children}
    </View>
  )
}

export default CustomWrapper