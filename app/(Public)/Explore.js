import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import TextButton from "../../components/ui/Buttons/TextButton";
import { Colors } from "../../constants/Colors";
import ExploreCard from "../../components/Cards/ExploreCard";
import TopicCard from "../../components/Cards/TopicCard";
import CustomWrapper from "../../components/Cards/CustomWrapper";
import { exporeFetch, getSources } from "../../utils/newApi";
import TopicCardSkeleton from "../../components/Cards/TopicCardSkeleton";
import ExploreCardSkeleton from "../../components/Cards/ExploreCardSkeleton";

const Explore = () => {
  const [news, setNews] = useState();
  const [sources, setSources] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const data = await exporeFetch();
      const sourcesData = await getSources();
      setSources(sourcesData);
      setNews(data);
      setIsLoading(false);
    }
    fetch();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <CustomWrapper>
        <Text className="text-[32px] font-bold">Explore</Text>
        <ScrollView>
          <View className="flex-row my-[16px] justify-between">
            <Text>Topic</Text>
            <Pressable>
              <Text>See all</Text>
            </Pressable>
          </View>
          <View className="gap-[16px]">
            {isLoading && (
              <>
                <ExploreCardSkeleton />
                <ExploreCardSkeleton />
                <ExploreCardSkeleton />
              </>
            )}
            {sources &&
              sources
                .slice(0, 3)
                .map((source) => <ExploreCard source={source} />)}
          </View>
          <View className="my-[16px]">
            <Text className="text-[16px] font-bold">Popular Topic</Text>
          </View>
          {isLoading && <TopicCardSkeleton />}
          {news && (
            <FlatList
              scrollEnabled={false}
              nestedScrollEnabled={false}
              data={news}
              keyExtractor={(item) => item.id}
              renderItem={(item) => <TopicCard news={item.item} />}
              contentContainerStyle={{ gap: 16 }}
            />
          )}
        </ScrollView>
      </CustomWrapper>
    </SafeAreaView>
  );
};

export default Explore;
