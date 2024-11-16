import {Text, Pressable } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const FilterBtn = ({name,isActive,onPress}) => {

  return(
    <Pressable onPress={onPress.bind(this,name)} className=' h-[34px]' style={{borderBottomColor:Colors.primaryBlue,borderBottomWidth:isActive?2:0}}  >
      <Text className="text-[16px]" style={{color:isActive?'black':Colors.grayText}}>{name}</Text>
    </Pressable>
  );
};
export default FilterBtn;
