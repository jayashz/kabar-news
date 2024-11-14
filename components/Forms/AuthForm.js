import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Checkbox from "../ui/Checkbox";
import CustBtn from "../ui/CustBtn";
import BtnNIcon from "../ui/BtnNIcon";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";


const AuthForm = ({onAuthenticate}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = route.key.includes("Login");

  function submitHandler() {
    if (!email.includes("@")) {
      console.warn("invalid email");
      return;
    }
    if (password.length < 8) {
      console.warn("Password should be greater then 8 letters.");
      return;
    }
    onAuthenticate({email:email,password:password});
  } 


  function modeChangeHandler() {
    isLogin ? navigation.navigate("Signup") : navigation.navigate("Login");
  }

  return (
    <View className="w-full">
      <Text className="text-sm">Email*</Text>
      <View className="flex-row justify-between mt-1 h-[48px] w-full py-[13.5px] px-[10px] rounded-[6px] border-[1px]">
        <TextInput
          onChangeText={(text) => setEmail(text)}
          className="flex-1"
          value={email}
          autoCapitalize="none"
          autoComplete="email"
        />
        <Pressable onPress={() => setEmail("")}>
          <AntDesign name="close" size={22} color="black" />
        </Pressable>
      </View>
      <Text className="text-sm mt-[16px]">Password*</Text>
      <View className="flex-row justify-between  h-[48px] w-full py-[13.5px] px-[10px] rounded-[6px] border-[1px]">
        <TextInput
          onChangeText={(text) => setPassword(text)}
          className="flex-1"
          value={password}
          autoCapitalize="none"
          autoComplete="password"
        />
        <Pressable>
          <FontAwesome5 name="eye-slash" size={19} color="black" />
        </Pressable>
      </View>
      <View className="flex-row items-center justify-between mt-[8px] gap-1">
        <View className="flex-row items-center">
          <Checkbox />
          <Text className="text-sm">Remember me</Text>
        </View>
        <Pressable onPress={() => navigation.navigate("Forgot")}>
          <Text style={{ color: Colors.primaryBlue }}>
            Forgot the password?
          </Text>
        </Pressable>
      </View>
      <View className="w-full mt-4">
        <CustBtn onPress={submitHandler}>
          {isLogin ? "Login" : "Signup"}
        </CustBtn>
      </View>
      <Text className="text-center my-[16px] text-gray-600">
        or continue with
      </Text>
      <View className="flex-row justify-between">
        <BtnNIcon>Facebook</BtnNIcon>
        <BtnNIcon>Facebook</BtnNIcon>
      </View>
      <View className="flex-row self-center my-[16px] gap-1">
        <Text className="text-sm">
          {isLogin ? "Don't have account?" : "Already have an account?"}
        </Text>
        <Pressable onPress={modeChangeHandler}>
          <Text className="text-sm" style={{ color: Colors.primaryBlue }}>
            {isLogin ? "Sign Up" : "Log In"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AuthForm;
