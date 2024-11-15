import { View, Text, TextInput } from "react-native";
import React, { useState,useEffect } from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import { search } from "../../utils/newApi";
import { router } from "expo-router";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout( async() => {
      if (query) {
        const data = await search(query);
        const serializedData = JSON.stringify(data);
        data && router.push({
          pathname: '/Search',
          params: { searchData: serializedData }
        });
      }
    }, 500); // Wait 500ms after the user stops typing

    return () => clearTimeout(timeoutId);
  }, [query]);

  function searchHandler(text) {
    setQuery(text);
  }

  return (
    <View className="flex-row p-3 border-[1px] rounded-[6px] my-[16px]">
      <SimpleLineIcons name="magnifier" size={24} color="black" />
      <TextInput
        style={{ flex: 1, fontSize: 14 }}
        placeholder="Search"
        placeholderTextColor={Colors.grayText}
        onChangeText={(text) => searchHandler(text)}
      />
      <Ionicons name="filter" size={24} color="black" />
    </View>
  );
};

export default SearchBar;
