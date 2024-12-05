import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";

const Trips = () => {
  const handleSearch = () => {
    // Alert for "Start searching" action
    Alert.alert("Search", "Start searching for your next adventure!");
  };

  const handleHelpCenter = () => {
    // Open an external link to the Help Center
    Linking.openURL("https://www.example.com/help-center").catch(() =>
      Alert.alert("Error", "Could not open the Help Center")
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Trips</Text>

      {/* No Trips Message */}
      <Text style={styles.noTrips}>No trips booked ... yet!</Text>
      <Text style={styles.subText}>
        Time to dust off your bags and start planning your next adventure.
      </Text>

      {/* Start Searching Button */}
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Start searching</Text>
      </TouchableOpacity>

      {/* Help Center Link */}
      <Text style={styles.helpText}>
        Can't find your reservation here?{" "}
        <Text style={styles.linkText} onPress={handleHelpCenter}>
          Visit the Help Centre
        </Text>
      </Text>
    </View>
  );
};

export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  noTrips: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  searchButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  helpText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 20,
  },
  linkText: {
    color: "#F42146",
    fontWeight: "bold",
  },
});
