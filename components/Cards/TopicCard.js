import { Pressable, View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

import RecentCard from "./RecentCard";
import { router } from "expo-router";


const TopicCard = ({news}) => {

  function clickHandler(){

    const serializedNews = JSON.stringify(news);
    router.push({pathname:'DetailScreen',params: {serializedNews}});
    
  }
  
  return (
    <View>
      <Pressable onPress={clickHandler}>
        <View className="p-2">
          <Image
            source={{uri:news.urlToImage}}
            className="w-full object-center rounded-[6px] h-[25vh]"
          />
          <Text className="my-2 text-[13px]" style={{ color: Colors.grayText }}>
            {news.author}
          </Text>
          <Text className="text-[16px]">
            {news.title}
          </Text>
        </View>
      </Pressable>
      <RecentCard source={news.source.name} time={news.publishedAt}  />
    </View>
  );
};

export default TopicCard;
