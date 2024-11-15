import { View, Text,Image,Pressable } from 'react-native'
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';

const RecentCard = ({source,time}) => {
  const calculateHoursAgo = (time) => {
    const presentDate = new Date();
    const publishedDate = new Date(time);
    
    // Calculate difference in milliseconds
    const diffInMs = presentDate - publishedDate;
    
    // Convert to hours
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    
    // Format the output
    if (diffInHours < 1) {
      return 'Less than an hour ago';
    } else if (diffInHours === 1) {
      return '1 hour ago';
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const days = Math.floor(diffInHours / 24);
      return days === 1 ? '1 day ago' : `${days} days ago`;
    }
  };
  
  // Usage in your component:
  const timeAgo = calculateHoursAgo(time);

  return (
    <View className="justify-between flex-row items-center">
          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Image source={require("../../assets/dummyImg/News Author.png")} className='w-[20px] h-[20px]' />
              <Text className="text-[13px] font-bold">{source}</Text>
            </View>
            <Text>{timeAgo}</Text>
          </View>
          <Pressable><Entypo name="dots-three-horizontal" size={18} color="black" /></Pressable>
        </View>
  )
}

export default RecentCard