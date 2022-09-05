import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Categories from '../components/Categories';

const HomeScreen = () => {
  return (
    <SafeAreaView className="">
        <Categories />
    </SafeAreaView>
  )
}

export default HomeScreen