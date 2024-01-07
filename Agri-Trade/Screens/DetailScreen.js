import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Details = ({ navigation }) => {
    





  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Orangepic.jpeg")}
        style={styles.productImage}
      />

      <View style={styles.nameContainer}>
        <Text style={styles.riceText}>Rice Seed</Text>
        <Text style={styles.riceAmount}>$799.99</Text>
      </View>

      <View style={styles.quanContainer}>
        <Ionicons
          name="md-add"
          size={20}
          color="black"
          style={[styles.textItem, styles.iconStyle]}
        />
        <Text style={styles.iconText}>1</Text>
        <AntDesign
          name="minus"
          size={20}
          color="black"
          style={[styles.textItem, styles.iconStyle]}
        />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.desText}>Description</Text>
        <Text numberOfLines={5} style={styles.paraText}>
          simply dummy text of the printing and typesetting good industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has 1500 and it is
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("AddToCart")}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },

  productImage: {
    height: 200,
    width: "100%",
    borderRadius: 10,
  },

  nameContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },

  riceText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },

  riceAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  quanContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 5,
  },

  iconText: {
    margin: 10,
  },

  textItem: {
    padding: 1,
  },

  iconStyle: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 1,
    margin: 2,
  },

  // Decriptiion styles'
  paraText: {
    fontSize: 16,
    marginTop: 10,
  },

  desText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  buttonContainer: {
    marginTop: 50,
    backgroundColor: "#00B251",
    borderRadius: 18,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },

  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
