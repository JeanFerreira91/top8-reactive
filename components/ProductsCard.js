import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const ProductsCard = () => {
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
      <View className="flex-column items-center bg-white py-2 px-5 mb-36 space-y-4">
        {
            // Looping though each product in the DB
            data.map((item, index) => {
                return (
                    <View
                        key={index}
                        className="items-center justify-between pb-5 border-b-2 border-[#1f306e]"
                    >
                        <Image
                            source={{ uri: data[index].item_pictures }}
                            className="h-96 w-96"
                        />
                        <View className="items-start">
                            <Text className="text-xl font-bold pb-2">{data[index].item_description}</Text>
                            <TouchableOpacity
                                className="rounded-lg bg-[#1f306e] p-4 ml-24"
                                // Opening the product on the Browser
                                onPress={() => Linking.openURL(data[index].url_amazon)}
                            >
                                <Text className="text-center text-white text-lg font-bold">View on Amazon</Text>
                            </TouchableOpacity>
                        </View>
                    </View>           
                )
            })
        }
      </View>
    </ScrollView>
  );
};

export default ProductsCard;
