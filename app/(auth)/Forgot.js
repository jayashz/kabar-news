import { View, Text, SafeAreaView, TextInput } from "react-native";
import React from "react";
import BackBtn from "../../components/ui/BackBtn";
import { Dimensions } from "react-native";
import CustBtn from "../../components/ui/CustBtn";
import { useNavigation } from "expo-router";
const Forgot = () => {
  const deviceWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-6 ">
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
        </View>
        <View>
          <Text
            className="text-4xl font-bold my-[16px] leading-[48px]"
            style={{ width: deviceWidth / 2 }}
          >
            Fortgot Password ?
          </Text>

          <Text className="text-[16px] text-[##4E4B66] w-[325px] leading-[24px]">
            Don’t worry! it happens. Please enter the address associated with
            your account.
          </Text>
        </View>
        <Text className="text-sm mt-[16px]">Email ID / Mobile number</Text>
        <View className="flex-row justify-between mt-1 h-[48px] w-full py-[13.5px] px-[10px] rounded-[6px] border-[1px]">
          <TextInput />
        </View>
      </View>
      <View className='p-6'>
        <CustBtn onPress={()=>navigation.navigate('(verify)')}>Submit</CustBtn>
      </View>
    </SafeAreaView>
  );
};

export default Forgot;
