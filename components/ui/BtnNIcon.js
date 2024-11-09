import { View, Text, Pressable } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

const BtnNIcon = ({ children }) => {
  return (
    <Pressable
      className="flex-row justify-center items-center px-9 py-3 gap-[10px] bg-slate-300 rounded-[6px]"
    >
      <Entypo name="facebook" size={24} color="black" />
      <Text>{children}</Text>
    </Pressable>
  );
};

export default BtnNIcon;
