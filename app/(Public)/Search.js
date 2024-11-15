import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import CustomWrapper from "../../components/Cards/CustomWrapper";
import SearchBar from "../../components/ui/SearchBar";
import { useLocalSearchParams } from "expo-router";
import NewsCard from "../../components/Cards/NewsCard";

const Search = () => {
  const { searchData } = useLocalSearchParams();
  const data = searchData ? JSON.parse(searchData) : null;

  return (
    <SafeAreaView className="flex-1">
      <CustomWrapper>
        <SearchBar />
        <FlatList data={data} renderItem={(item)=><NewsCard data={item.item} />} keyExtractor={(item)=>item.id} contentContainerStyle={{gap:24}} />
      </CustomWrapper>
    </SafeAreaView>
  );
};

export default Search;
