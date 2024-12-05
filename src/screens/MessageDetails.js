import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MessageDetails = ({ route }) => {
  const { message } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{message.sender}</Text>
      <Text style={styles.date}>{message.date}</Text>
      <Text style={styles.preview}>{message.preview}</Text>
      <Text style={styles.details}>{message.details}</Text>
    </View>
  );
};

export default MessageDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },
  preview: {
    fontSize: 16,
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    color: "#555",
  },
});
