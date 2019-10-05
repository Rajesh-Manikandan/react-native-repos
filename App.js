import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PublicRoutes } from "./app/config/routes";
import store from "./app/config/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <PublicRoutes />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
