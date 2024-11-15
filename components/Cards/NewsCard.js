import { View, Text,Image } from 'react-native'
import React from 'react'
import RecentCard from './RecentCard'
import { Colors } from '../../constants/Colors'

const NewsCard = ({data}) => {
  const calculateHoursAgo = (publishedAt) => {
    const presentDate = new Date();
    const publishedDate = new Date(publishedAt);
    
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
  const timeAgo = calculateHoursAgo(data.publishedAt);

  return (
    <View className='flex-row'>
      <Image source={{uri:data.urlToImage}} className='w-[96px] h-[96px] object-center rounded-[6px] self-center'/>
      <View className='flex-1 justify-between '>
        <Text className='text-[13px]' style={{color:Colors.grayText}}>{data.author}</Text>
        <Text className='text-[16px] leading-[24px] '>{data.title}</Text>
        <RecentCard source={data.source.name} time={timeAgo}/>
      </View>
    </View>
  )
}

export default NewsCard