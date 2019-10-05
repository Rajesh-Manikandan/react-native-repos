import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PublicRoutes } from "./app/config/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <PublicRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
