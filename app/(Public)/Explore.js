import { View, Text, SafeAreaView, Pressable, Image } from "react-native";
import React from "react";
import TextButton from "../../components/ui/Buttons/TextButton";
import { Colors } from "../../constants/Colors";
import ExploreCard from "../../components/ui/ExploreCard";

const Explore = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-[24px]">
        <Text className="text-[32px] font-bold">Explore</Text>
        <View className="flex-row my-[16px] justify-between">
          <Text>Topic</Text>
          <Pressable>
            <Text>See all</Text>
          </Pressable>
        </View>
        <View className='gap-[16px]'> 
          <ExploreCard/>
          <ExploreCard/>
          <ExploreCard/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
