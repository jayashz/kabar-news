import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import BoardingScreen from './BoardingScreen';

const OnBoard = () => {
    const [selectedIndex,setSelectedIndex] = useState(0);


  return (
    <View className='flex-1'>
      <BoardingScreen selectedIndex={selectedIndex} total={3} onIndexChnage={(i)=>setSelectedIndex(i)}/>
    </View>
  )
}

export default OnBoard