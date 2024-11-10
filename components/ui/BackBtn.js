import { View, Text, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const BackBtn = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="arrow-back-sharp" size={24} color="black" />
    </Pressable>
  );
};

export default BackBtn;
