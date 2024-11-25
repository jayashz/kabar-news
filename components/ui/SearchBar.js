import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";

import { BlurView } from "expo-blur";
import CrossBtn from "./Buttons/CrossBtn";
import React, { useState } from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import { search } from "../../utils/newApi";
import { router } from "expo-router";
import { useRoute } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { sortByList } from "../../constants/filterBtnLists";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);
  const [sortBy, setSortBy] = useState("publishedAt");

  const route = useRoute().name;

  async function searchHandler() {
    if (query && route != "search") {
      const data = await search(query,sortBy);

      const serializedData = JSON.stringify(data);
      data &&
        router.push({
          pathname: "/Search",
          params: { searchData: serializedData },
        });
    }
    if (query.length > 0) {
      onSearch(query,sortBy);
    }
  }

  return (
    <>
      <View className="flex-row p-3 border-[1px] rounded-[6px] my-[16px] gap-2">
        <Pressable onPress={searchHandler}>
          <SimpleLineIcons name="magnifier" size={24} color="black" />
        </Pressable>
        <TextInput
          style={{ flex: 1, fontSize: 14 }}
          placeholder="Search"
          placeholderTextColor={Colors.grayText}
          onChangeText={(text) => setQuery(text)}
          value={query}
          autoCapitalize="none"
        />
        {route == "index" ? (
          <Pressable onPress={() => setModalVisibility(!modalVisibility)}>
            <Ionicons name="filter" size={24} color="black" />
          </Pressable>
        ) : (
          <Pressable onPress={() => setQuery("")}>
            <AntDesign name="close" size={24} color="black" />
          </Pressable>
        )}
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibility}
        onRequestClose={() => {
          setModalVisibility(!visible);
        }}
      >
        <BlurView
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,.5)",
            position: "relative",
          }}
          intensity={10}
        >
          <View className="absolute top-20 right-10">
            <CrossBtn onPress={() => setModalVisibility(false)} />
          </View>
          <View
            style={{
              width: "80%",
              height: 150,
              borderRadius: 10,
              backgroundColor: "#fff",
            }}
          >
            {sortByList.map((item) => (
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 50,
                  borderBottomWidth: 0.5,
                  justifyContent: "center",
                  paddingLeft: 20,
                }}
                onPress={() => {
                  setSortBy(item);
                  setModalVisibility(false);
                }}
              >
                <Text style={{ fontSize: 18, color: "#000" }}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </BlurView>
      </Modal>
    </>
  );
};

export default SearchBar;
