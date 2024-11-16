import { View, Text, SafeAreaView, Pressable, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import HomePageTop from "../../components/ui/HomePageTop";
import SearchBar from "../../components/ui/SearchBar";
import TopicCard from "../../components/Cards/TopicCard";
import { Colors } from "../../constants/Colors";
import CustomWrapper from "../../components/Cards/CustomWrapper";
import { search, trendingFetch } from "../../utils/newApi";
import { router } from "expo-router";
import { filters } from "../../constants/filterBtnLists";
import FilterBtn from "../../components/ui/FilterBtn";
import NewsCard from "../../components/Cards/NewsCard";

const Homepage = () => {
  const [activeFilter,setActiveFilter] = useState('All');
  const [trendingNews, setTrendingNews] = useState();
  const [filteredNews,setFilteredNews] = useState();
  useEffect(() => {
    async function fetch() {
      try {
        const news = await trendingFetch();
        setTrendingNews(news);
        setFilteredNews(news);
      } catch (error) {
        console.log("error fetching trending: ", error);
      }
    }
    fetch();
  }, []);

  function seeAllHandler() {
    const serializedNews = JSON.stringify(trendingNews);
    router.push({
      pathname: "/Trending",
      params: { serializedNews },
    });
  }
  async function filterHandler(query) {
    setActiveFilter(query);
    const news = await search(query);
    setFilteredNews(news);
  }

  return (
    <SafeAreaView className="flex-1 ">
      <CustomWrapper>
        <HomePageTop />
        <ScrollView>
          <SearchBar />
          <View className="flex-row justify-between">
            <Text>Trending</Text>
            <Pressable onPress={seeAllHandler}>
              <Text>See all</Text>
            </Pressable>
          </View>
          {trendingNews && <TopicCard news={trendingNews[0]} />}
          <View>
            <View className="flex-row justify-between mt-2">
              <Text className="text-[16px] font-bold"> Latest</Text>
              <Pressable>
                <Text
                  className="text-[14px]"
                  style={{ color: Colors.grayText }}
                >
                  See all
                </Text>
              </Pressable>
            </View>
          </View>
          <ScrollView
            horizontal
            className="my-[16px]"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          >
            {filters.map((item)=><FilterBtn name={item} onPress={filterHandler} isActive={activeFilter==item} />)}
          </ScrollView>
            <FlatList
            data={filteredNews}
            scrollEnabled={false}
            nestedScrollEnabled={true}
            keyExtractor={(item)=> item.id}
            renderItem={(item)=><NewsCard data={item.item}/>}
            />
        </ScrollView>
      </CustomWrapper>
    </SafeAreaView>
  );
};

export default Homepage;
