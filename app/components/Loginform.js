import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Actions } from "react-native-router-flux";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../actions/authActions";

export default Loginform = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  return (
    <View style={styles.loginFormContainer}>
      <TextInput
        placeholder="Username/Email"
        style={styles.input}
        placeholderTextColor="rgba(255,255,255,0.8)"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="rgba(255,255,255,0.8)"
      />
      <TouchableOpacity style={styles.btn} onPress={() => dispatch(login())}>
        <Text style={styles.btnText}>Login{auth.isLogged.toString()}</Text>
      </TouchableOpacity>
      <View style={styles.linkcontainer}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => Actions.signup()}>
          <Text style={styles.linkText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginFormContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  input: {
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "rgba(255,255,255,0.9)",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: Dimensions.get("window").width * 0.8,
    borderRadius: 15
  },
  btn: {
    backgroundColor: "#0077B5",
    width: Dimensions.get("window").width * 0.8,
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginTop: 20
  },
  btnText: {
    fontSize: 18,
    color: "rgba(255,255,255,0.9)",
    textAlign: "center"
  },
  linkcontainer: {
    marginTop: 10,
    flexDirection: "row"
  },
  text: {
    fontSize: 16
  },
  linkText: {
    fontSize: 16,
    color: "#0077B5",
    textDecorationLine: "underline",
    marginLeft: 5
  }
});
