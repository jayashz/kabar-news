import { View, SafeAreaView, TextInput, Text } from "react-native";
import BackBtn from "../../../components/ui/BackBtn";
import React from "react";
import PasswordInp from "../../../components/ui/PasswordInp";
import CustBtn from "../../../components/ui/CustBtn";
import { useNavigation } from "expo-router";

const ResetPassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 24 }}>
        <View>
          <BackBtn />
        </View>
        <View style={{ width: 162, marginVertical: 13 }}>
          <Text style={{ fontSize: 32, fontWeight: 700, lineHeight: 48 }}>
            Reset Password
          </Text>
        </View>
        <PasswordInp>New Password*</PasswordInp>
        <PasswordInp>Confirm New Password*</PasswordInp>
      </View>
      <View style={{ padding: 24 }}>
        <CustBtn onPress={()=>navigation.navigate('Sucess')}>Submit</CustBtn>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
