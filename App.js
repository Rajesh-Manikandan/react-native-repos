import React from "react";
import { StyleSheet, View } from "react-native";
import { PublicRoutes } from "./app/config/routes";
import persist from "./app/config/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const persistStore = persist();

export default function App() {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <View style={styles.container}>
          <PublicRoutes />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
