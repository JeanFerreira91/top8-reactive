import { View, Text, TouchableOpacity, ScrollView, Linking } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import { useQuery } from "@tanstack/react-query";

const CategoryCard = () => {
  // Query to fetch Categories data from the API
  const { isLoading, error, data } = useQuery(['repoData'], () =>
    fetch('https://amazfunels.herokuapp.com/api/categorias/').then(res =>
      res.json()
    )
  )

  // If the data is loading, show a loading message
  if (isLoading) return <Text>Loading...</Text>
  // If there is an error fetching the data, show an error message
  if (error) return <Text>Error: {error.message}</Text>

  return (
    // View to handle the CategoryCard component
    <View>
      {/* View to handle the title of the component and icon */}
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold">All Categories</Text>
        <ArrowRightIcon className="w-5 h-5" color={'#1f306e'} />
      </View>
      {/* Displaying a View which scrolls horizontally showing all the Categories */}
      <ScrollView 
        contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: 20,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {/* View to handle the names of each Category */}
        <View className="flex-row">
          {/* Mapping through the data to display each Category */}
          {
            data.map((item, index) => {
              return (
                <View key={index}>
                  <TouchableOpacity
                    className="relative mr-4"
                    // onPress={() => Linking.openURL(item.categoria_link)}
                  >
                    <Text className="font-bold text-[#1f306e]">{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryCard;