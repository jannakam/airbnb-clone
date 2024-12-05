import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryScroll from "../myComponents/CategoryScroll";
import SearchBar from "../myComponents/SearchBar";
import { Box } from "@/components/ui/box";
import { Switch } from "@/components/ui/switch";
import PropertyCard from "../myComponents/PropertyCard";
import propertyData from "../data/propertyData";

const Explore = () => {
  return (
    <View className="flex-1">
      <SearchBar />
      <CategoryScroll />

      <ScrollView className="flex-1 px-4">
        <View className="h-2" />

        <Box className="bg-background-light dark:bg-background-dark rounded-lg border-solid border-outline-200 border-2 flex-row justify-between p-6">
          <View className="flex flex-col justify-center items-start">
            <Text className="text-typography-black dark:text-typography-white font-bold">
              Display total price
            </Text>
            <Text className="text-typography-gray">
              Include all fees, before taxes
            </Text>
          </View>
          <Switch size="lg" isDisabled={false} className="mt-2" />
        </Box>

        <View className="h-4" />

        <View className="gap-5">
          {propertyData.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Explore;
