import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FireIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const ProductsCard = () => {
  // Navigation Hook to navigate to the ProductScreen
  const navigation = useNavigation();
  // Query to fetch Products data from the API
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch("https://amazfunels.herokuapp.com/api/").then((res) => res.json())
  );

  // If the data is loading, show a loading message
  if (isLoading) return <Text>Loading...</Text>;
  // If there is an error fetching the data, show an error message
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <ScrollView
      className="divide-y divide-gray-200"
      horizontal={false}
      showsVerticalScrollIndicator={true}
    >
      <View className="flex-column bg-white py-2 px-5 mb-36 space-y-4">
        {
          // Looping though each product in the DB
          data.map((item, index) => {
            return (
              <View
                key={index}
                className="justify-between pb-5 border-b-2 border-[#1f306e]"
              >
                <View className="flex-row items-start justify-between">
                  <Text className="bg-[#1f306e] text-lg font-bold text-white">{index + 1}</Text>
                  {/* Checking if the item is special */}
                  {item.is_especial ? (
                    <FireIcon className="w-5 h-5" color={"#1f306e"} />
                    ) : (
                      <Text className=""></Text>
                    )
                  }
                </View>
                <View className="items-center pr-3 pl-3">
                  <Image
                    source={{ uri: item.item_pictures }}
                    className="h-36 w-36 rounded"
                  />
                </View>
                <View className="items-start">
                  <Text className="text-sm font-bold pb-2">
                    {item.item_description}
                  </Text>
                  <TouchableOpacity
                    className="rounded-lg bg-[#1f306e] p-4 ml-24"
                    // Sending to the Product Screen
                    onPress={() => navigation.push("Product", { item })}
                  >
                    <Text className="text-center text-white text-md font-bold">
                      View Product
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        }
      </View>
    </ScrollView>
  );
};

export default ProductsCard;
