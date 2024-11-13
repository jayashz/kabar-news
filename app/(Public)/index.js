import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HomePageTop from '../../components/ui/HomePageTop'
import SearchBar from '../../components/ui/SearchBar'
import TrendingCard from '../../components/TrendingCard'

const Homepage = () => {
  return (
    <SafeAreaView className='flex-1 '>
      <View className='flex-1 px-[24px]'>
        <HomePageTop/>
        <SearchBar/>
        <TrendingCard/>
      </View>
    </SafeAreaView>
  )
}

export default Homepage