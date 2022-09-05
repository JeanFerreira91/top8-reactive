import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";

const CategoryCard = () => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold">Categories</Text>
        <ArrowRightIcon className="w-5 h-5" color={'#1f306e'} />
      </View>
      <ScrollView 
        contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: 20,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    >
      <View className="flex-row">
        <TouchableOpacity className="relative mr-10">
            <Text className="font-bold text-[#1f306e]">Chairs</Text>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-10">
            <Text className="font-bold text-[#1f306e]">Garden</Text>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-10">
            <Text className="font-bold text-[#1f306e]">Electronics</Text>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-10">
            <Text className="font-bold text-[#1f306e]">Computers</Text>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-10">
            <Text className="font-bold text-[#1f306e]">Cameras</Text>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-10">
            <Text className="font-bold text-[#1f306e]">Gadgets</Text>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-10">
            <Text className="font-bold text-[#1f306e]">Football</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};

export default CategoryCard;
