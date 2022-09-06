import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsCard from './ProductsCard';

// Variable to hold que QueryClient
const queryClient = new QueryClient();

const Products = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <ProductsCard />
    </QueryClientProvider>
  )
}

export default Products