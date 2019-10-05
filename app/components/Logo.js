import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../images/logo.png")} />
        <Text style={styles.logoText}>Auth App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    height: 80,
    width: 80
  },
  logoText: {
    fontSize: 16,
    color: "rgba(0,0,0,0.7)",
    fontWeight: "bold"
  }
});
