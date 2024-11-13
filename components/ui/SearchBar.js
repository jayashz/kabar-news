import { View, Text, TextInput } from 'react-native'
import React from 'react';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
const SearchBar = () => {
  return (
    <View className='flex-row p-3 border-[1px] rounded-[6px] my-[16px]'>
        <SimpleLineIcons name="magnifier" size={24} color="black" />
        <TextInput style={{flex:1,fontSize:14}} placeholder='Search' placeholderTextColor={Colors.grayText}  />
        <Ionicons name="filter" size={24} color="black" />
    </View>
  )
}

export default SearchBar