import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'

const TextButton = ({children}) => {
  return (
    <Pressable>
        <View className='border-[1px] rounded-[6px] px-[18px] py-[5px]' style={{borderColor:Colors.primaryBlue}}>
            <Text className='text-[16px]'>
                {children}
            </Text>
        </View>
    </Pressable>
  )
}

export default TextButton