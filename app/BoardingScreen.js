import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

import CustBtn from "../components/ui/CustBtn";

const BoardingData = [
  {
    id: 1,
    title: "Lorem ipsum is simply dummy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: require("../assets/BoardingScreenImages/News Images.png"),
  },
  {
    id: 2,
    title: "Lorem ipsum is simply dummy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: require("../assets/BoardingScreenImages/News Images-2.png"),
  },
  {
    id: 3,
    title: "Lorem ipsum is simply dummy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: require("../assets/BoardingScreenImages/News Images-3.png"),
  },
];

function BoardContent() {
  const deviceWidth = Dimensions.get("window").width;
  return (
    <View>
      <Image
        source={require("../assets/BoardingScreenImages/News Images.png")}
        style={{width:deviceWidth}}
      />
      <View className="w-[300px] ml-4 mt-4">
        <Text className="text-2xl font-bold">Lorem ipsum is simply dummy</Text>
        <Text className="text-lg text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
    </View>
  );
}

const BoardingScreen = ({ selectedIndex, total, onIndexChnage }) => {
  
  return (
    <View className="flex-1">
      <View>
        <FlatList
          keyExtractor={(item)=>item.id}
          data={BoardingData}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => <BoardContent data={item} />}
          contentContainerStyle={{ alignItems: "flex-start" }} // Ensures content aligns at the top
          style={{ alignSelf: "flex-start" }}
        />
      </View>

      <View className='flex-row items-center justify-between px-4 mt-8'>
        <View className='flex-row items-center gap-1'>
          <View className='w-4 h-4 rounded-full bg-slate-500'/>
          <View className='w-4 h-4 rounded-full bg-slate-500'/>
          <View className='w-4 h-4 rounded-full bg-slate-500'/>
        </View>
        <View className="flex-row items-center gap-[10px]">
          {selectedIndex > 1 && (
            <Pressable
              onPress={() => {
                if (selectedIndex < 1) {
                  return;
                }
                onIndexChnage(selectedIndex - 1);
              }}
            >
              <Text className="text-lg text-gray-500 font-semibold">Back</Text>
            </Pressable>
          )}
          <CustBtn onPress={() => onIndexChnage(selectedIndex + 1)}>
            {selectedIndex == total ? "Get Started" : "Next"}
          </CustBtn>
        </View>
      </View>
    </View>
  );
};

export default BoardingScreen;
