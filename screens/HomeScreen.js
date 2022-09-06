import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Categories from '../components/Categories';
import Products from '../components/Products';

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <Categories />
        <Products />
    </SafeAreaView>
  )
}

export default HomeScreen