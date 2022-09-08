import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import ProductCard from "../components/ProductCard";

const ProductScreen = () => {
  return (
    <SafeAreaView>
        {/* Displaying the ProductCard component */}
      <ProductCard />
    </SafeAreaView>
  );
};

export default ProductScreen;
