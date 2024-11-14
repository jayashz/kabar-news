import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const ProfileDetails = () => {
  return (
    <View>
      <View className='flex-row items-center gap-[16px]'>
        <Image
          source={require("../../assets/dummyImg/profile.png")}
          className="w-[100px] h-[100px] object-center"
        />
        <View className='flex-1 flex-row justify-between'>
            <View className='gap-1'>
                <Text className='text-center text-[16px] font-bold'>2515</Text>
                <Text className='text-[16px]' style={{color:Colors.grayText}}>Followers</Text>
            </View>
            <View className='gap-1'>
                <Text className='text-center text-[16px] font-bold'>2515</Text>
                <Text className='text-[16px]' style={{color:Colors.grayText}}>Followers</Text>
            </View>
            <View className='gap-1'>
                <Text className='text-center text-[16px] font-bold'>2515</Text>
                <Text className='text-[16px]' style={{color:Colors.grayText}}>Followers</Text>
            </View>
        </View>
      </View>
        <View className='my-[16px]'>
            <Text className='text-[16px] font-bold'>
                Jayash Shrestha
            </Text>
            <Text className='text-[16px] leading-[24px]' style={{color:Colors.grayText}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
        </View>
    </View>
  );
};

export default ProfileDetails;
