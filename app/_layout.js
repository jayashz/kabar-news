import "../global.css";
import React from "react";
import {Stack } from "expo-router";


const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="BoardingScreen" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(Public)" />
    </Stack>
  );
};

const _layout = () => {


  return <AuthLayout/>
};

export default _layout;
