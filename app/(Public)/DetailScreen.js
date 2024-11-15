import { View, Text, SafeAreaView, Image, Button, ScrollView } from "react-native";
import React from "react";
import CustomWrapper from "../../components/Cards/CustomWrapper";
import { useLocalSearchParams } from "expo-router";
import BackBtn from "../../components/ui/BackBtn";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "../../constants/Colors";
const DetailScreen = () => {
  const routeData = useLocalSearchParams();
  const news = JSON.parse(routeData.serializedNews);
  return (
    <SafeAreaView className="flex-1">
      <CustomWrapper>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between mb-[16px]">
          <BackBtn />
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-1">
            <Image
              source={require("../../assets/dummyImg/News Author.png")}
              className="w-[50px] h-[50px]"
            />
            <View>
              <Text className="text-[16px] font-semibold">{news.author}</Text>
              <Text className="text-[14px]" style={{ color: Colors.grayText }}>
                4mins ago
              </Text>
            </View>
          </View>
          <Button title="Follow" />
        </View>
        <Image
          source={{ uri: news.urlToImage }}
          className="w-full h-[30vh] object-center rounded-[6px] my-[16px]"
        />
        <Text className="text-[24px] leading-[36px]">{news.title}</Text>
        <View className='gap-[16px] mt-[16px]'>
          <Text className="text-[16px] leading-[24px]" style={{ color: Colors.grayText }}>
            {news.description}
          </Text>
          <Text className="text-[16px] leading-[24px]" style={{ color: Colors.grayText }}>
            {news.content}
          </Text>
        </View>
        </ScrollView>
      </CustomWrapper>
    </SafeAreaView>
  );
};

export default DetailScreen;
