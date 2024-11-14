import { View, Text,SafeAreaView } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import AuthForm from "../../components/Forms/AuthForm";
import { signupUser } from "../../utils/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = () => {
  async function signupHandler({email,password}){
    try{
      const token = await signupUser({email,password});
      await AsyncStorage.setItem('token',token);
      navigation.navigate('(Public)');
    }
    catch(error){
      console.log("Error while signUp: ",error);
    }
  }
  return (
   <SafeAreaView className="flex-1">
      <View className="flex-1 p-6">
        <View>
          
          <Text
            className="text-[48px] font-bold"
            style={{ color: Colors.primaryBlue }}
          >
            Hello!
          </Text>
          <Text className="text-[20px] text-gray-600 w-[222px] mt-2 leading-8">
            Sign up to get Started
          </Text>
        </View>
        <View className="mt-[48px] w-full">
          <AuthForm onAuthenticate={signupHandler} />
        </View>
      </View>
      </SafeAreaView>
  );
};

export default Signup;
