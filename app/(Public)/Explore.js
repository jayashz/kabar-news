import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import TextButton from "../../components/ui/Buttons/TextButton";
import { Colors } from "../../constants/Colors";
import ExploreCard from "../../components/Cards/ExploreCard";
import TopicCard from "../../components/Cards/TopicCard";
import CustomWrapper from "../../components/Cards/CustomWrapper";

const Explore = () => {
  return (
    <SafeAreaView className="flex-1">
      <CustomWrapper>
        <Text className="text-[32px] font-bold">Explore</Text>
        <ScrollView>
          <View className="flex-row my-[16px] justify-between">
            <Text>Topic</Text>
            <Pressable>
              <Text>See all</Text>
            </Pressable>
          </View>
          <View className="gap-[16px]">
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
          </View>
          <View className="my-[16px]">
            <Text className="text-[16px] font-bold">Popular Topic</Text>
          </View>
          <TopicCard />
        </ScrollView>
      </CustomWrapper>
    </SafeAreaView>
  );
};

export default Explore;
