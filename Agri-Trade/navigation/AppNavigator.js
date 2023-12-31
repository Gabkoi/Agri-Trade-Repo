import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

// Screens
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/Login";
import SignupScreen from "../Screens/SignUp";
import AddToCartScreen from "../Screens/AddToCart";
import UserProfileScreen from "../Screens/UserProfile";
import editprofileScreen from "../Screens/editprofileScreen";
import passwordupdatescreen from "../Screens/passwordupdatescreen";
import DetailScreen from "../Screens/DetailScreen";
import OrderSummaryScreen from "../Screens/OrderSummary";

const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const SignupStack = createNativeStackNavigator();
const AddToCartStack = createNativeStackNavigator();
const UserProfileStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="SignIn" headerMode="none">
        <AuthStack.Screen
          name="SignIn"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />

        <AuthStack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="UpdatePasword"
          component={passwordupdatescreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: "#ffff",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height: 65,
      },
    }}
  >
    <Tab.Screen
      name="Homepage"
      component={HomeStackScreen}
      options={{
        tabBarIcon: () => <AntDesign name="home" size={30} color="black" />,
        tabBarLabel: "",
        title: "Homepage",
        headerTitleAlign: "center",
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="AddToCart"
      component={AddToCartStackScreen}
      options={{
        tabBarIcon: () => (
          <AntDesign name="shoppingcart" size={30} color="black" />
        ),
        tabBarLabel: "",
        title: "My Cart",
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="UserProfile"
      component={UserProfileStackScreen}
      options={{
        tabBarIcon: () => <AntDesign name="user" size={30} color="black" />,
        tabBarLabel: "",
        title: "User Profile",
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

// Home Stack Screen
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="HomeStack"
      component={HomeScreen}
      options={{
        title: "Homepage",
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="DetailScreen"
      component={DetailScreen}
      options={{
        title: "Product Details",
        headerTitleAlign: "center",
      }}
    />
  </HomeStack.Navigator>
);

// AddToCard Stack Screen
const AddToCartStackScreen = () => (
  <AddToCartStack.Navigator>
    <AddToCartStack.Screen
      name="AddToCardStack"
      component={AddToCartScreen}
      options={{
        headerTitle: "My Cart",
      }}
    />
    <AddToCartStack.Screen
      name="OrderSummary"
      component={OrderSummaryScreen}
      options={{
        headerTitle: "Order Summary",
      }}
    />
  </AddToCartStack.Navigator>
);

// UserProfile Stack Screen
const UserProfileStackScreen = () => (
  <UserProfileStack.Navigator>
    <UserProfileStack.Screen
      name="UserProfileStack"
      component={UserProfileScreen}
      options={{
        title: "User Profile",
        headerShown: false,
      }}
    />
    <UserProfileStack.Screen
      name="editProfileStack"
      component={editprofileScreen}
      options={{
        title: "edit Profile",
      }}
    />
  </UserProfileStack.Navigator>
);
