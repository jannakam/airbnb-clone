import React from "react";
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
} from "@/components/ui/button";

import { StatusBar } from "expo-status-bar";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from "react-native";
import HomeNavigation from "./src/navigation/HomeNav/HomeNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <NavigationContainer>
        <HomeNavigation />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
