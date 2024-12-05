import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PropertyCard = ({ property }) => {
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Property', { property })}
      activeOpacity={0.9}
    >
      <View>
        <View className="relative">
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {property.images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={{ width: windowWidth -29, height: 300 }}
                className="rounded-xl"
              />
            ))}
          </ScrollView>
        </View>

        <View className="mt-2">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-semibold">{property.location}</Text>
            <View className="flex-row items-center gap-1">
              <Text>★</Text>
              <Text>{property.rating}</Text>
            </View>
          </View>
          
          <Text className="text-gray-500">{property.distance} kilometers away</Text>
          <Text className="text-gray-500">{property.dates}</Text>
          <Text className="font-semibold mt-1">${property.pricePerNight} night</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PropertyCard

const styles = StyleSheet.create({})