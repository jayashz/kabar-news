import { View, Text } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";

const _layout = () => {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" />
        <Stack.Screen name="Signup" />
        <Stack.Screen name="Forgot" />
        <Stack.Screen name="(verify)" />
      </Stack>
    );
  
};

export default _layout;
