import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
const CustBtn = ({children,onPress,fullSize}) => {
  return (
    <Pressable style={{backgroundColor:Colors.primaryBlue,paddingHorizontal:24,paddingVertical:13, borderRadius:6,justifyContent:'center',alignItems:'center'}} onPress={onPress}  >
        <Text className='text-lg font-semibold' style={{color:'white'}}>{children}</Text>
    </Pressable>
  )
}

export default CustBtn