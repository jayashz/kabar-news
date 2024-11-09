import { View, Text, TextInput } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Checkbox from "../ui/Checkbox";
import CustBtn from "../ui/CustBtn";
import BtnNIcon from "../ui/BtnNIcon";

const AuthForm = () => {
  return (
    <View className="w-full">
      <Text className="text-sm">Username*</Text>
      <View className="flex-row justify-between mt-1 h-[48px] w-full py-[13.5px] px-[10px] rounded-[6px] border-[1px]">
        <TextInput />
        <AntDesign name="close" size={22} color="black" />
      </View>
      <Text className="text-sm mt-[16px]">Password*</Text>
      <View className="flex-row justify-between  h-[48px] w-full py-[13.5px] px-[10px] rounded-[6px] border-[1px]">
        <TextInput />
        <FontAwesome5 name="eye-slash" size={19} color="black" />
      </View>
      <View className="flex-row items-center mt-[8px] gap-1">
        <Checkbox />
        <Text className="text-sm">Remember me</Text>
      </View>
      <View className='w-full mt-4'>
        <CustBtn>Login</CustBtn>
      </View>
      <Text className='text-center my-[16px] text-gray-600'>or continue with</Text>
      <View className='flex-row justify-between'>
        <BtnNIcon>Facebook</BtnNIcon>
        <BtnNIcon>Facebook</BtnNIcon>
      </View>
      <View className='flex-row self-center my-[16px]'>
        <Text>
            don't have account?
        </Text>
        <Text>
            Sign Up
        </Text>
      </View>
    </View>
  );
};

export default AuthForm;
