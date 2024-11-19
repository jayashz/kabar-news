import { View, Text } from 'react-native'
import React from 'react';
import BackBtn from '../components/ui/BackBtn'
import Entypo from '@expo/vector-icons/Entypo';


const TopBar = ({title}) => {
  return (
    <View className='flex-row justify-between items-center'>
            <BackBtn/>
            <Text className='text-[16px] font-medium'>
              {title}
            </Text>
            <Entypo name="dots-three-vertical" size={20} color="black" />
        </View>
  )
}

export default TopBar