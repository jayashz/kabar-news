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
import React, { useRef, useState } from "react";

import CustBtn from "../components/ui/CustBtn";
import { Colors } from "../constants/Colors";

const deviceWidth = Dimensions.get("window").width;
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

function BoardContent({ data }) {
  return (
    <View>
      <Image source={data.image} style={{ width: deviceWidth }} />
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
  const ref = useRef(null);

  function scrollUpdate(event) {
    const contentOffSetx = event.nativeEvent.contentOffset.x;
    const currIndex = Math.round(contentOffSetx / deviceWidth);
    onIndexChnage(currIndex);
  }
  function goToNextSlide() {
    onIndexChnage(selectedIndex + 1);
    const offset = (selectedIndex + 1) * deviceWidth;
    ref?.current.scrollToOffset({ offset });
  }
  function goToPreviousSlide() {
    if (selectedIndex < 1) {
      return;
    }
    onIndexChnage(selectedIndex - 1);
    const offset = (selectedIndex - 1) * deviceWidth;
    ref?.current.scrollToOffset({ offset });
  }
  return (
    <View className="flex-1">
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={BoardingData}
          ref={ref}
          onMomentumScrollEnd={scrollUpdate}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => <BoardContent data={item} />}
          contentContainerStyle={{ alignItems: "flex-start" }} // Ensures content aligns at the top
          style={{ alignSelf: "flex-start" }}
        />
      </View>

      <View className="flex-row items-center justify-between px-4 mt-8">
        <View className="flex-row items-center gap-1">
          {BoardingData.map((_, index) => (
            <View
              className="w-4 h-4 rounded-full bg-slate-500"
              style={
                index == selectedIndex
                  ? { backgroundColor: Colors.primaryBlue }
                  : null
              }
            />
          ))}
        </View>
        <View className="flex-row items-center gap-[10px]">
          {selectedIndex > 0 && (
            <Pressable onPress={goToPreviousSlide}>
              <Text className="text-lg text-gray-500 font-semibold">Back</Text>
            </Pressable>
          )}
          <CustBtn onPress={goToNextSlide}>
            {selectedIndex == total - 1 ? "Get Started" : "Next"}
          </CustBtn>
        </View>
      </View>
    </View>
  );
};

export default BoardingScreen;
