import { View, Text,Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import TextButton from "../ui/Buttons/TextButton";

const ExploreCard = ({source}) => {
  return (
    <View className="flex-row">
      <Image
        source={require("../../assets/dummyImg/unsplash_mmsQUgMLqUo.png")}
        className="w-[70px] h-[70px] object-contain rounded-[6px] "
      />
      <View className="flex-1 mx-2 justify-between">
        <Text className="text-[16px]">{source.name}</Text>
        <Text
          className="text-[14px] leading-[21px]"
          style={{ color: Colors.grayText }}
        >
         {source.description.slice(0,50)}...
        </Text>
      </View>
      <View className="self-center">
        <TextButton>Save</TextButton>
      </View>
    </View>
  );
};

export default ExploreCard;
