import { View, Text,Image } from 'react-native'
import React from 'react'
import RecentCard from './RecentCard'
import { Colors } from '../../constants/Colors'

const NewsCard = () => {
  return (
    <View className='flex-row'>
      <Image source={require('../../assets/dummyImg/news.png')} className='w-[96px] h-[96px] object-center rounded-[6px]'/>
      <View className='flex-1 justify-between '>
        <Text className='text-[13px]' style={{color:Colors.grayText}}>Europe</Text>
        <Text className='text-[16px] leading-[24px] '>Ukraine's President Zelensky to BBC: Blood money being paid...</Text>
        <RecentCard/>
      </View>
    </View>
  )
}

export default NewsCard