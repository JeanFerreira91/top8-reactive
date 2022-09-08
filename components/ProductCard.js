import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";

const ProductCard = () => {
  // Hook for the Navigation
  const navigation = useNavigation();
  // Pulling the data from the route
  const {
    params: { item },
  } = useRoute();

  return (
    <View className="flex-1 flex-column">
      {/* Displaying an X icon to go back */}
      <View className="justify-center ml-80 mb-2 mt-2">
        <TouchableOpacity 
            // Close and go back to the HomeScreen
            onPress={() => navigation.goBack('Home')}
        >
            <XCircleIcon color={"#1f306e"} size={45} />
        </TouchableOpacity>
      </View>
      {/* Displaying the Product's Image */}
      <Image
        source={{ uri: item.item_pictures }}
        className="h-96 w-96 rounded ml-1 mr-1"
      />
      <Text className="font-bold text-lg text-[#1f306e] mt-4">
        {item.item_description}
      </Text>
      {/* Displaying the Item Category */}
      <View className="mt-4 left-72">
        <Text className="font-thin text-black">{item.category}</Text>
      </View>
      {/* Displaying a Button to Amazon Link */}
      <View className="mt-4">
        <TouchableOpacity
          className="rounded-lg bg-[#1f306e] p-4 ml-16 mr-16"
          // Opening the product on the Browser
          onPress={() => Linking.openURL(item.url_amazon)}
        >
          <Text className="text-center text-white text-md font-bold">
            View on Amazon
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
