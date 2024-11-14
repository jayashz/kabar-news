import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomWrapper from '../../components/Cards/CustomWrapper'
import SearchBar from '../../components/ui/SearchBar'
import NewsCard from '../../components/Cards/NewsCard'

const Bookmark = () => {
  return (
    <SafeAreaView className='flex-1'>
      <CustomWrapper>
        <View>
          <Text className='text-[32px] font-bold'>
            Bookmark
          </Text>
          <SearchBar/>
        </View>
        <ScrollView contentContainerStyle={{gap:16}}>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
        </ScrollView>
      </CustomWrapper>
    </SafeAreaView>
  )
}

export default Bookmark