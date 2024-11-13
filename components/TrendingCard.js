import { Pressable, View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import Entypo from '@expo/vector-icons/Entypo';

const TrendingCard = () => {
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
            source={require("../assets/dummyImg/image 1.png")}
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
      <View className="mt-[36px] justify-between flex-row items-center">
          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Image source={require("../assets/dummyImg/News Author.png")} />
              <Text className="text-[13px] font-bold">BBC News</Text>
            </View>
            <Text>4 hr ago</Text>
          </View>
          <Pressable><Entypo name="dots-three-horizontal" size={18} color="black" /></Pressable>
        </View>
    </View>
  );
};

export default TrendingCard;
