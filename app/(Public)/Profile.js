import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import CustomWrapper from '../../components/Cards/CustomWrapper';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProfileDetails from '../../components/Cards/ProfileDetails';

const Profile = () => {
  return (
    <SafeAreaView className='flex-1'>
      <CustomWrapper>
        <View className="flex-row justify-between items-center">
          <View></View>
          <Text className='text-[16px]'>Profile</Text>
          <Pressable>
          <Ionicons name="settings" size={24} color="black" />
          </Pressable>
        </View>
        <ProfileDetails/>
      </CustomWrapper>
    </SafeAreaView>
  )
}

export default Profile