import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { Colors } from "../../../constants/Colors";
import CustBtn from "../../../components/ui/CustBtn";

const Sucess = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-6 justify-center items-center">
        <View className="justify-center items-center">
          <View className='px-[49px] py-[53.5px]'>
            <Image
              source={require("../../../assets/Icon/Vector.png")}
              className="w-[217px] h-[66px]"
            />
          </View>
          <View className="justify-center items-center">
            <Text className='text-[32px] font-bold' style={{color:Colors.grayText}}>Congratulations!</Text>
            <Text className='text-[16px]' style={{color:Colors.grayText}}>Your account is ready to use.</Text>
          </View>
        </View>
      </View>
      <View className='p-6'>
        <CustBtn>Go To Homepage</CustBtn>
      </View>
    </SafeAreaView>
  );
};

export default Sucess;
