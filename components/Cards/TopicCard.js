import { Pressable, View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

import RecentCard from "./RecentCard";

const TopicCard = () => {
  return (
    <View className="h-[35vh ">
      <View className="flex-row justify-between">
        <Text>Trending</Text>
        <Pressable>
          <Text>See all</Text>
        </Pressable>
      </View>
      <Pressable>
        <View className="p-2">
          <Image
            source={require("../../assets/dummyImg/image 1.png")}
            className="w-full object-contain rounded-[6px]"
          />
          <Text className="my-2 text-[13px]" style={{ color: Colors.grayText }}>
            Europe
          </Text>
          <Text className="text-[16px]">
            Russian warship: Moskva sinks in Black Sea
          </Text>
        </View>
       
      </Pressable>
      <RecentCard/>
    </View>
  );
};

export default TopicCard;
