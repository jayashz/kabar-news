import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { withDecay } from "react-native-reanimated";
import CustBtn from "../components/ui/CustBtn";

const BoardingContent = [
  {
    id: 1,
    title: "Lorem ipsum is simply dummy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: require("../assets/BoardingScreenImages/News Images.png"),
  },
  {
    id: 2,
    title: "Lorem ipsum is simply dummy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: require("../assets/BoardingScreenImages/News Images-2.png"),
  },
  {
    id: 3,
    title: "Lorem ipsum is simply dummy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: require("../assets/BoardingScreenImages/News Images-3.png"),
  },
];

const BoardingScreen = ({ selectedIndex, total, onIndexChnage }) => {
  console.log(selectedIndex);
  return (
    <View className="flex-1">
      <Image
        source={require("../assets/BoardingScreenImages/News Images.png")}
        className="w-full"
      />
      <View className="w-[300px] ml-4 mt-4">
        <Text className="text-2xl font-bold">Lorem ipsum is simply dummy</Text>
        <Text className="text-lg text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
      <View style={{ alignSelf: "flex-end", marginTop: 60,marginHorizontal:4 }}>
        <View className="flex-row items-center gap-[10px]">
          {selectedIndex > 1 && (
            <Pressable onPress={()=>onIndexChnage(selectedIndex-1)}>
              <Text className="text-lg text-gray-500 font-semibold">Back</Text>
            </Pressable>
          )}
          <CustBtn onPress={() => onIndexChnage(selectedIndex + 1)}>
            Next
          </CustBtn>
        </View>
      </View>
    </View>
  );
};

export default BoardingScreen;
