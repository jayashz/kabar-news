import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import TopicCard from "../../components/Cards/TopicCard";

import CustomWrapper from "../../components/Cards/CustomWrapper";
import TopBar from "../../components/TopBar";
const Trending = () => {
  const routeData = useLocalSearchParams();
  const news = JSON.parse(routeData.serializedNews);

  return (
    <SafeAreaView className="flex-1">
      <CustomWrapper>
        <View className='mb-[16px]'>
          <TopBar title='Trending' />
        </View>
        <FlatList
          data={news}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <TopicCard news={item.item} />}
        />
      </CustomWrapper>
    </SafeAreaView>
  );
};

export default Trending;
