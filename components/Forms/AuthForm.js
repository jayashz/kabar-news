import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Checkbox from "../ui/Checkbox";
import CustBtn from "../ui/CustBtn";
import BtnNIcon from "../ui/BtnNIcon";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";

const AuthForm = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isLogin = route.key.includes("Login");

  function loginHandler(){
    navigation.navigate('(Public)');
  }

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
      <View className="flex-row items-center justify-between mt-[8px] gap-1">
        <View className="flex-row items-center">
          <Checkbox />
          <Text className="text-sm">Remember me</Text>
        </View>
        <Pressable onPress={()=> navigation.navigate("Forgot")}>
          <Text style={{color:Colors.primaryBlue}}>Forgot the password?</Text>
        </Pressable>
      </View>
      <View className="w-full mt-4">
        <CustBtn onPress={loginHandler}>{isLogin ? "Login" : "Signup"}</CustBtn>
      </View>
      <Text className="text-center my-[16px] text-gray-600">
        or continue with
      </Text>
      <View className="flex-row justify-between">
        <BtnNIcon>Facebook</BtnNIcon>
        <BtnNIcon>Facebook</BtnNIcon>
      </View>
      <View className="flex-row self-center my-[16px]">
        <Text className="text-sm">don't have account?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text className="text-sm" style={{ color: Colors.primaryBlue }}>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AuthForm;
