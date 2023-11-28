import {
  Text,
  StyleSheet,
  View,
  Image,
  Select,
  SelectItem,
} from "react-native";
import React, { Component } from "react";
import Avatar from "../assets/images/avatar.jpg";

const navbar = () => {
  return (
    <>
      <View style={styles.navbar12}>
        <Text style={styles.username}>Afriza Rizky Pratama</Text>
        <Image style={styles.avatar12} source={Avatar} />
      </View>
    </>
  );
};

export default navbar;

const styles = StyleSheet.create({
  navbar12: {
    marginTop: 40,
    width: 500,
    height: 60,
    flexDirection: "row",
    backgroundColor: "#F4CE14",
  },

  avatar12: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginTop: 5,
    marginLeft:10,
  },

  username: {
    marginTop: 20,
    color: "black",
    marginLeft:300,
  },
});
