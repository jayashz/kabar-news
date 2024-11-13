import { View, Text, SafeAreaView, Pressable, ScrollView } from "react-native";
import React from "react";
import HomePageTop from "../../components/ui/HomePageTop";
import SearchBar from "../../components/ui/SearchBar";
import TrendingCard from "../../components/TrendingCard";
import { Colors } from "../../constants/Colors";

const Homepage = () => {
  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 px-[24px]">
        <HomePageTop />
        <ScrollView>
          <SearchBar />
          <TrendingCard />
          <View>
            <View className="flex-row justify-between mt-2">
              <Text className="text-[16px] font-bold"> Latest</Text>
              <Pressable>
                <Text
                  className="text-[14px]"
                  style={{ color: Colors.grayText }}
                >
                  See all
                </Text>
              </Pressable>
            </View>
          </View>
          <ScrollView
            horizontal
            className="my-[16px]"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          >
            <Pressable>
              <Text className="text-[16px]">All</Text>
            </Pressable>
            <Pressable>
              <Text className="text-[16px]">Sports</Text>
            </Pressable>
            <Pressable>
              <Text className="text-[16px]">Political</Text>
            </Pressable>
            <Pressable>
              <Text className="text-[16px]">Business</Text>
            </Pressable>
            <Pressable>
              <Text className="text-[16px]">Health</Text>
            </Pressable>
            <Pressable>
              <Text className="text-[16px]">Travel</Text>
            </Pressable>
            <Pressable>
              <Text className="text-[16px]">Science</Text>
            </Pressable>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Homepage;
