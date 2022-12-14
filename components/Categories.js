import { View } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Variable to hold que QueryClient
const queryClient = new QueryClient();

const Categories = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View>
          <View className="mb-3 border-b border-[#1f306e]">
          <CategoryCard />
          </View>
      </View>
    </QueryClientProvider>
  )
}

export default Categories