import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import CustomWrapper from "../../components/Cards/CustomWrapper";
import TopBar from "../../components/TopBar";

const Notification = () => {
  return (
    <SafeAreaView className="flex-1">
      <CustomWrapper>
        <View className="mb-[16px]">
          <TopBar title="Notification" />
        </View>
        <Text className="text-[16px] font-bold">No notification yet.</Text>
      </CustomWrapper>
    </SafeAreaView>
  );
};

export default Notification;
