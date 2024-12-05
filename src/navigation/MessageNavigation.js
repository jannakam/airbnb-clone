import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Messages from "../screens/Messages";
import MessageDetails from "../screens/MessageDetails";

const Stack = createNativeStackNavigator();

const MessageNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="MessageDetails" component={MessageDetails} />
    </Stack.Navigator>
  );
};

export default MessageNavigation;

const styles = StyleSheet.create({});
