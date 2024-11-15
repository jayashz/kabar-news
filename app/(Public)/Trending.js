import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import TopicCard from '../../components/Cards/TopicCard';
import BackBtn from '../../components/ui/BackBtn'
import CustomWrapper from '../../components/Cards/CustomWrapper';
import Entypo from '@expo/vector-icons/Entypo';
const Trending = () => {
    const routeData = useLocalSearchParams();
    const news =JSON.parse(routeData.serializedNews);

  return (
    <SafeAreaView className='flex-1'>
      <CustomWrapper>
        <View className='flex-row justify-between items-center mb-[16px]'>
            <BackBtn/>
            <Text className='text-[16px] font-medium'>
              Trending
            </Text>
            <Entypo name="dots-three-vertical" size={20} color="black" />
        </View>
        <FlatList data={news} keyExtractor={(item)=>item.id} renderItem={(item)=> <TopicCard news={item.item} />}/>
        </CustomWrapper>
    </SafeAreaView>
  )
}

export default Trending