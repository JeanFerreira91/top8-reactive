import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <View>
        <View className="mb-3 border-b border-[#1f306e]">
        <CategoryCard />
        </View>
        <Text>Next Section to be placed here!</Text>
    </View>
  )
}

export default Categories