import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import RecentCard from "./RecentCard";
import { Colors } from "../../constants/Colors";
import { router } from "expo-router";

const NewsCard = ({ data }) => {
  function clickHandler(){
    const serializedNews= JSON.stringify(data);

    router.push({pathname:'DetailScreen',params: {serializedNews}});
    // router.push({pathname:'DetailScreen',params:{serializedData}});
  }
  return (
    <Pressable onPress={clickHandler}>
      <View className="flex-row">
        <Image
          source={{ uri: data.urlToImage }}
          className="w-[96px] h-[96px] object-center rounded-[6px] self-center"
        />
        <View className="flex-1 justify-between ">
          <Text className="text-[13px]" style={{ color: Colors.grayText }}>
            {data.author}
          </Text>
          <Text className="text-[16px] leading-[24px] ">{data.title}</Text>
          <RecentCard source={data.source.name} time={data.publishedAt} />
        </View>
      </View>
    </Pressable>
  );
};

export default NewsCard;
