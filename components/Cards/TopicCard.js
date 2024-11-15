import { Pressable, View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

import RecentCard from "./RecentCard";
import { router } from "expo-router";

const TopicCard = ({news}) => {
function seeAllHandler(){
  const serializedNews = JSON.stringify(news);
  router.push({
    pathname: '/Trending',
    params: { serializedNews }
  })
}
  return (
    <View className="h-[35vh ">
      <View className="flex-row justify-between">
        <Text>Trending</Text>
        <Pressable onPress={seeAllHandler}>
          <Text>See all</Text>
        </Pressable>
      </View>
      <Pressable>
        <View className="p-2">
          <Image
            source={{uri:news[0].urlToImage}}
            className="w-full object-center rounded-[6px] h-[25vh]"
          />
          <Text className="my-2 text-[13px]" style={{ color: Colors.grayText }}>
            {news[0].author}
          </Text>
          <Text className="text-[16px]">
            {news[0].title}
          </Text>
        </View>
       
      </Pressable>
      <RecentCard/>
    </View>
  );
};

export default TopicCard;
