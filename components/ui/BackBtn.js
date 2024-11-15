import { View, Text, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const BackBtn = ({onPress}) => {
  return (
    <Pressable onPress={()=>router.back()}>
      <Ionicons name="arrow-back-sharp" size={24} color="black" />
    </Pressable>
  );
};

export default BackBtn;
