import { View, Text, TextInput } from "react-native";
import React from "react";

const AuthForm = () => {
  return (
    <View className="w-full">
      <Text className="text-sm">Username*</Text>
      <View className="flex-row justify-between mt-1 h-[48px] w-full py-[13.5px] px-[10px] rounded-[6px] border-[1px]">
        <TextInput />
        <Text>X</Text>
      </View>
    </View>
  );
};

export default AuthForm;
