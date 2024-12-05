import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const WishListCard = ({ item, onRemove }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.price}>KD{item.price}/night</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => onRemove(item.id)}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WishListCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
    // marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    color: "#555",
    marginBottom: 5,
  },
  price: {
    color: "#141313",
    fontWeight: "bold",
    marginTop: 5,
  },
  removeButton: {
    justifyContent: "center",
    paddingHorizontal: 3,
    paddingVertical: 3,
    borderRadius: 5,
    backgroundColor: "#F42146",
  },
  removeButtonText: {
    color: "#F6F2F3",
    fontWeight: "bold",
    textAlign: "center",
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 18,
    color: "#555",
  },
});
