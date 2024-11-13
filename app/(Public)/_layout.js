import React from "react";
import { Stack, Tabs } from "expo-router";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const PublicLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="compass-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Bookmark"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bookmark-o" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="circle-user" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notification"
        options={{
          href: null, // This prevents the tab from being included in the URL
          tabBarStyle: { display: "none" }, // This hides the tab completely
          tabBarItemStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
};

export default PublicLayout;
