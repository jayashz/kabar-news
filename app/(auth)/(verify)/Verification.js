import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import BackBtn from "../../../components/ui/BackBtn";
import { useNavigation } from "expo-router";
import { OtpInput } from "react-native-otp-entry";
import { Colors } from "../../../constants/Colors";
import CustBtn from "../../../components/ui/CustBtn";

const Verification = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-6">
        <View>
          <BackBtn />
        </View>
        <View className="justify-center items-center my-[27px] gap-2">
          <Text className="text-[32px] font-bold">OTP Verification</Text>
          <Text className="text-[16px]">
            Enter the OTP sent to +67-1234-5678-9
          </Text>
        </View>
        <View className="w-[304] self-center">
          <OtpInput
            numberOfDigits={4}
            focusColor={Colors.primaryBlue}
            theme={{
              pinCodeContainerStyle: {
                borderRadius: 6,
                width: 64,
                height: 64,
              },
            }}
          />
        </View>
        <Text className="self-center mt-[27px]">
          Resend code in <Text style={{ color: Colors.errorRed }}>55s</Text>
        </Text>
      </View>
      <View className="p-6">
        <CustBtn onPress={()=>navigation.navigate('ResetPassword')}>Verify</CustBtn>
      </View>
    </SafeAreaView>
  );
};

export default Verification;
