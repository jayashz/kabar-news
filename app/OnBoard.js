import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import BoardingScreen from './BoardingScreen';
import { useNavigation } from 'expo-router';
const OnBoard = () => {
    const navigation = useNavigation();
    const [selectedIndex,setSelectedIndex] = useState(0);
   if(selectedIndex<3){
    return (
        <View className='flex-1'>
          <BoardingScreen selectedIndex={selectedIndex} total={3} onIndexChnage={(i)=>setSelectedIndex(i)}/>
        </View>
      )
   } 
   else{
    navigation.push('(auth)')
   }
  
}

export default OnBoard