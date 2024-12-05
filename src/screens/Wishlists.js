import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import wishlistData from "../data/WishlistsData";
import WishListCard from "../component/WishListCard";

const Wishlists = () => {
  const [WishlistItems, setWishlistItems] = useState(wishlistData);

  // to Remove The Item form the Wishlist
  const removeFromWishlists = (id) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };
  const renderItem = ({ item }) => {
    return <WishListCard item={item} onRemove={removeFromWishlists} />;
    // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}> My Wishlist </Text>
      <FlatList
        data={WishlistItems}
        // renderItem={({ item }) => <WishListCard item={item} />}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // numColumns={2}
        // contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Wishlists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#F42146",
  },
  listContent: {
    paddingBottom: 20,
  },
});
