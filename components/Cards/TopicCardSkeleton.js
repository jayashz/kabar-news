import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const TopicCardSkeleton = () => {
  return (
    <View className='w-full'>
        <View className='w-full h-[25vh] rounded-[6px]' style={{backgroundColor:'#ccc'}}></View>
        <View className='w-full h-[16px] rounded-md mt-2' style={{backgroundColor:'#ccc'}} ></View>
    </View>
  )
}

export default TopicCardSkeleton