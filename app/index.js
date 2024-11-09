import { View, Text, Button } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { useNavigation } from 'expo-router'

const Welcome = () => {
  const navigation = useNavigation();

  return (

    <View style={{flex:1,justifyContent:"center", alignItems:'center'}}>
      <Button title="Click to continue" onPress={()=>navigation.navigate('OnBoard')}></Button>
    </View>

  )
}

export default Welcome;