import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@/components/ui/icon";

const messagesData = [
  {
    id: 1,
    sender: "Mohammad",
    date: "17/08/22",
    preview: "Waiting your message, thank you",
    details: "18 Sept – 27 Oct 2022 · Qatar",
    image: "", // add actual image URL
  },
  {
    id: 2,
    sender: "Salim",
    date: "27/09/19",
    preview: "Hi Osam, thank you for your interest in...",
    details: "27–29 Sept 2019 · kuwait",
    image: "", // add actual image URL
  },
];
const Messages = () => {
  const navigation = useNavigation();

  // Call each message
  const renderMessage = ({ item }) => (
    <TouchableOpacity
      style={styles.messageCard}
      onPress={() => navigation.navigate("MessageDetails", { message: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.messageDetails}>
        <View style={styles.headerRow}>
          <Text style={styles.sender}>{item.sender}</Text>
          <Text style={styles.date}>{item.data}</Text>
        </View>
        <Text style={styles.preview}>{item.preview}</Text>
        <Text style={styles.details}>{item.details}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
        <Icon name="search" size="24" style={styles.icon} />
      </View>
      {/* filtr */}
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filterButtonActive}>
          <Text style={styles.filterTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Travilling</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Support</Text>
        </TouchableOpacity>
      </View>
      {/* message Lsit */}
      <FlatList
        data={messagesData}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    color: "#000",
  },
  filters: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f4f4f4",
    marginRight: 10,
  },
  filterButtonActive: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F42146",
    marginRight: 10,
  },
  filterText: {
    color: "#000",
  },
  filterTextActive: {
    color: "#fff",
  },
  messageCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageDetails: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sender: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  preview: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  details: {
    fontSize: 12,
    color: "#888",
  },
});
