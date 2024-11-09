import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import AuthForm from "../../components/Forms/AuthForm";

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-5">
        <View>
          <Text className="text-[48px] font-bold">Hello</Text>
          <Text
            className="text-[48px] font-bold"
            style={{ color: Colors.primaryBlue }}
          >
            Again
          </Text>
          <Text className="text-[20px] text-gray-600 w-[222px] mt-2 leading-8">
            Welcome back you've been missed
          </Text>
        </View>
        <View className='mt-[48px] w-full'>
          <AuthForm />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
