import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import TextButton from "../ui/Buttons/TextButton";
const ExploreCardSkeleton = () => {
  return (
    <View className="flex-row">
      <View
        className="w-[70px] h-[70px] rounded-[6px]"
        style={{ backgroundColor: '#ccc' }}
      ></View>
      <View className="flex-1 mx-2 justify-between">
        <View
          className="w-32 h-[16px] rounded-[6px] "
          style={{ backgroundColor: '#ccc' }}
        ></View>
        <View
          className="w-[13rem] h-[32px] rounded-[6px]"
          style={{ backgroundColor: '#ccc'}}
        ></View>
      </View>
      <View className="self-center">
        <TextButton>Save</TextButton>
      </View>
    </View>
  );
};

export default ExploreCardSkeleton;
