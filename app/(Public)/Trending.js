import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Trending = () => {
    const routeData = useLocalSearchParams();
    const news = JSON.parse(routeData.serializedNews);
    console.log(news);
  return (
    <View>
      <Text>Trending</Text>
    </View>
  )
}

export default Trending