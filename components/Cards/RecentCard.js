import { View, Text,Image,Pressable } from 'react-native'
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';

const RecentCard = ({source,time}) => {
  return (
    <View className="justify-between flex-row items-center">
          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Image source={require("../../assets/dummyImg/News Author.png")} />
              <Text className="text-[13px] font-bold">{source}</Text>
            </View>
            <Text>{time}</Text>
          </View>
          <Pressable><Entypo name="dots-three-horizontal" size={18} color="black" /></Pressable>
        </View>
  )
}

export default RecentCard