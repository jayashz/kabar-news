import { View, Text,SafeAreaView } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import AuthForm from "../../components/Forms/AuthForm";

const Signup = () => {
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
          <AuthForm />
        </View>
      </View>
      </SafeAreaView>
  );
};

export default Signup;
