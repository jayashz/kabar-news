import { View, Text, SafeAreaView, FlatList } from "react-native";
import React,{useState} from "react";
import CustomWrapper from "../../components/Cards/CustomWrapper";
import SearchBar from "../../components/ui/SearchBar";
import { useLocalSearchParams } from "expo-router";
import NewsCard from "../../components/Cards/NewsCard";
import { search } from "../../utils/newApi";

const Search = () => {
  const { searchData } = useLocalSearchParams();
  const [data, setData] = useState(searchData ? JSON.parse(searchData) : null);

  async function searchNews(query,sortBy) {
    const fetchedNews = await search(query,sortBy);
    setData(fetchedNews);
  }
  return (
    <SafeAreaView className="flex-1">
      <CustomWrapper>
        <SearchBar onSearch={searchNews} />
        <FlatList
          data={data}
          renderItem={(item) => <NewsCard data={item.item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 24 }}
        />
      </CustomWrapper>
    </SafeAreaView>
  );
};

export default Search;
