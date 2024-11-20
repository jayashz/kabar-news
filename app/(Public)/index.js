import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import HomePageTop from "../../components/ui/HomePageTop";
import SearchBar from "../../components/ui/SearchBar";
import TopicCard from "../../components/Cards/TopicCard";
import { Colors } from "../../constants/Colors";
import CustomWrapper from "../../components/Cards/CustomWrapper";
import { search, searchCategory, trendingFetch } from "../../utils/newApi";
import { router } from "expo-router";
import { filters } from "../../constants/filterBtnLists";
import FilterBtn from "../../components/ui/FilterBtn";
import NewsCard from "../../components/Cards/NewsCard";
import TopicCardSkeleton from "../../components/Cards/TopicCardSkeleton";
import CrossBtn from "../../components/ui/Buttons/CrossBtn";

const Homepage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [trendingNews, setTrendingNews] = useState();
  const [filteredNews, setFilteredNews] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const news = await trendingFetch();
        setTrendingNews(news);
        setFilteredNews(news);
        setIsLoading(false);
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
    const news = await searchCategory(query);
    setFilteredNews(news);
  }

  return (
    <SafeAreaView className="flex-1 ">
      <CustomWrapper>
        <HomePageTop />
        <ScrollView>
          <SearchBar onPress={() => setModalVisibility(!modalVisibility)} />
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
                  height: 200,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "100%",
                    height: 50,
                    borderBottomWidth: 0.5,
                    justifyContent: "center",
                    paddingLeft: 20,
                  }}
                >
                  <Text style={{ fontSize: 18, color: "#000" }}>
                    {" "}
                    Sort By Name
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    height: 50,
                    borderBottomWidth: 0.5,
                    justifyContent: "center",
                    paddingLeft: 20,
                  }}
                >
                  <Text style={{ fontSize: 18, color: "#000" }}>
                    Low to High Price
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    height: 50,
                    borderBottomWidth: 0.5,
                    justifyContent: "center",
                    paddingLeft: 20,
                  }}
                >
                  <Text style={{ fontSize: 18, color: "#000" }}>
                    Hight to Low Price
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    height: 50,
                    borderBottomWidth: 0.5,
                    justifyContent: "center",
                    paddingLeft: 20,
                  }}
                >
                  <Text style={{ fontSize: 18, color: "#000" }}>
                    {" "}
                    Sort By Rating
                  </Text>
                </TouchableOpacity>
              </View>
            </BlurView>
          </Modal>
          <View className="flex-row justify-between">
            <Text>Trending</Text>
            <Pressable onPress={seeAllHandler}>
              <Text>See all</Text>
            </Pressable>
          </View>
          {isLoading && <TopicCardSkeleton />}
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
            {filters.map((item) => (
              <FilterBtn
                name={item}
                onPress={filterHandler}
                isActive={activeFilter == item}
              />
            ))}
          </ScrollView>
          <FlatList
            data={filteredNews}
            scrollEnabled={false}
            nestedScrollEnabled={true}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <NewsCard data={item.item} />}
            contentContainerStyle={{ gap: 16 }}
          />
        </ScrollView>
      </CustomWrapper>
    </SafeAreaView>
  );
};

export default Homepage;
