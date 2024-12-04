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
export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button
          action={"primary"}
          variant={"outline"}
          size={"lg"}
          isDisabled={false}
        >
          <ButtonText>Hello World</ButtonText>
        </Button>
      </View>
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
