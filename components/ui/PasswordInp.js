import { View, Text,TextInput } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const PasswordInp = ({children}) => {
  return (
    <>
      <Text className="text-sm mt-[16px]">{children}</Text>
      <View className="flex-row justify-between  h-[48px] w-full py-[13.5px] px-[10px] rounded-[6px] border-[1px]">
        <TextInput />
        <FontAwesome5 name="eye-slash" size={19} color="black" />
      </View>
    </>
  );
};

export default PasswordInp;
