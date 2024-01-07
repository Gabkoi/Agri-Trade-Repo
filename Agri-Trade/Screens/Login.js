import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.formContainer}>
          <Text style={styles.appName}>AgriTrade Form</Text>
          <Text style={styles.loginStyles}>Login</Text>

          <View style={styles.inputContainer}>
            <Feather name="phone" size={20} color="black" />
            <TextInput
              style={[styles.inputField, styles.inputStyles]}
              placeholder="Phone Number"
              multiline={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="lock-open"
              size={24}
              color="black"
              style={styles.icon}
            />

            <TextInput
              style={[styles.inputField, styles.inputStyles]}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.option}>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.optionText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("UpdatePasword")}
            >
              <Text style={styles.optionText}>Forget Password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("MainTabs")}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 200,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  inputField: {
    height: 50,
    // width: "10%"
  },

  inputStyles: {
    marginBottom: 1,
    paddingHorizontal: 10,
    fontSize: 15,
    textAlign: "auto",
  },

  loginStyles: {
    fontSize: 30,
    marginBottom: 10,
  },

  //   formAutomate:{
  // },

  formAutomateText: {
    fontSize: 16,
    textAlign: "right",
  },

  forgetPasswordText: {
    color: "#00B251",
  },

  buttonContainer: {
    marginTop: 30,
    backgroundColor: "#00B251",
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },

  buttonText: {
    fontSize: 20,
    textAlign: "center",
  },

  alternativeLine: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginTop: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#a7adbc",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },

  option: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  socialMediaConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  SocialLinkText: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: "45%",
    textAlign: "center",
    fontSize: 18,
  },

  formFooter: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "center",
  },

  footerText: {
    fontSize: 16,
  },

  signupText: {
    color: "#00B251",
  },

  // this is just a play it will be remove later
  appName: {
    fontSize: 30,
    marginBottom: 50,
    fontWeight: "bold",
    textAlign: "center",
  },

  imageIcon: {
    width: 100,
    flexDirection: "row",
  },
});
