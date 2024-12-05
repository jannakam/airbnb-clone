import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";

const Property = ({ route }) => {
  const { property } = route.params;
  const windowWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  const additionalDetails = {
    host: "Sarah Johnson",
    hostSince: "2019",
    superhost: true,
    maxGuests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2.5,
    amenities: [
      "Wifi",
      "Kitchen",
      "Free parking",
      "Pool",
      "Air conditioning",
      "Washer & dryer",
      "Security cameras",
      "Smoke alarm",
    ],
    description:
      "Experience luxury living in this stunning property. Perfect for families or groups, this spacious home offers modern amenities and breathtaking views. Located in a prime area, you'll be close to major attractions while enjoying a peaceful neighborhood setting.",
    reviews: 128,
    cleanliness: 4.9,
    accuracy: 4.8,
    communication: 4.95,
    location: 4.85,
    checkIn: 4.9,
    value: 4.85,
  };

  const originalPrice = property.pricePerNight;
  const discountPercentage = 15;
  const discountedPrice = Math.round(originalPrice * (1 - discountPercentage / 100));

  return (
    <View className="flex-1 bg-white">
      {/* Custom Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute left-4 top-12 z-50 bg-white rounded-full p-3 shadow-md"
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>

      <ScrollView className="flex-1">
        {/* Image Gallery */}
        <View>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {property.images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={{ width: windowWidth, height: 300 }}
              />
            ))}
          </ScrollView>
        </View>

        {/* Content */}
        <View className="p-6 space-y-8">
          {/* Title Section */}
          <View className="border-b border-gray-200 pb-4 space-y-4">
            <Text className="text-2xl font-bold">{property.location}</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-base">★ {property.rating} · {additionalDetails.reviews} reviews</Text>
              <View className="flex-row space-x-4">
                <TouchableOpacity className="flex-row items-center">
                  <Ionicons name="share-outline" size={24} color="black" />
                  <Text className="ml-2">Share</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                  <Ionicons name="heart-outline" size={24} color="black" />
                  <Text className="ml-2">Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Key Features */}
          <View className="border-b border-gray-200 pb-4 space-y-4">
            <View className="space-y-2">
              <View className="flex-row items-center">
                <Ionicons name="people" size={24} color="black" />
                <Text className="ml-4">{additionalDetails.maxGuests} guests</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="bed" size={24} color="black" />
                <Text className="ml-4">
                  {additionalDetails.bedrooms} bedrooms · {additionalDetails.beds} beds
                </Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="water" size={24} color="black" />
                <Text className="ml-4">{additionalDetails.bathrooms} bathrooms</Text>
              </View>
            </View>
          </View>

          {/* Host Section */}
          <View className="border-b border-gray-200 pb-4 space-y-4">
            <View className="flex-row justify-between items-center">
            <Avatar size="lg">
                <AvatarImage
                  source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
                />
              </Avatar>
              <View>
                <Text className="text-xl font-semibold">Hosted by {additionalDetails.host}</Text>
                {additionalDetails.superhost && (
                  <View className="flex-row items-center mt-2">
                    <Ionicons name="shield-checkmark" size={16} color="#FF385C" />
                    <Text className="text-gray-600 ml-1">Superhost</Text>
                  </View>
                )}
              </View>
              
            </View>
          </View>

          {/* Description */}
          <View className="border-b border-gray-200 pb-4">
            <Text className="text-base">{additionalDetails.description}</Text>
          </View>

          {/* Amenities */}
          <View className="pb-4">
            <Text className="text-xl font-semibold mb-4">What this place offers</Text>
            <View className="flex-row flex-wrap space-y-2">
              {additionalDetails.amenities.map((amenity, index) => (
                <View key={index} className="w-1/2 flex-row items-center">
                  <Ionicons name="checkmark-circle-outline" size={20} color="black" />
                  <Text className="ml-2">{amenity}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom Tab */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-xl font-semibold">${discountedPrice} / night</Text>
            <Text className="text-gray-500 line-through">${originalPrice}</Text>
          </View>
          <TouchableOpacity className="bg-[#FF385C] px-6 py-3 rounded-full">
            <Text className="text-white font-semibold">Reserve</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Property;
