import { View, Text, Image } from 'react-native'
import React from 'react'
import NotificationBtn from './Buttons/NotificationBtn'

const HomePageTop = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',paddingBottom:26}}>
        <Image source={require('../../assets/Icon/Vector.png')} style={{width:100,height:30}}/>
        <NotificationBtn/>
    </View>
  )
}

export default HomePageTop