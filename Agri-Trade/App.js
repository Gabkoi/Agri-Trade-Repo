import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

// Screens
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/Login';
import SignupScreen from './Screens/SignUp';
import AddToCardScreen from './Screens/AddToCard';
import UserProfileScreen from './Screens/UserProfile';

const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const SignupStack = createNativeStackNavigator();
const AddToCardStack = createNativeStackNavigator();
const UserProfileStack =  createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName='SignIn'
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffff',
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          height: 70,
        },
      }}
    >

      <Tab.Screen
        name="Homepage"
        component={HomeStackScreen}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={30} color="black" />,
          headerShown: false,
          tabBarLabel: '',
          title: "Create New Task",
          headerTitleAlign: "center",
        }}
      />

      <Tab.Screen
        name="SignIn"
        component={LoginStackScreen}
        options={{
          tabBarIcon: () => <AntDesign name="user" size={35} color="#fff" />,
          tabBarLabel: '',
          title: "Sign In",
          headerTitleAlign: "center",
          headerShown: false,
          tabBarVisible: false,
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
     {
      <Tab.Screen
        name="SignUp"
        component={SignupStackScreen}
        options={{
          tabBarIcon: () => <AntDesign name="user" size={30} color="black" />,
          tabBarLabel: '',
          title: "Sign Up",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      /> }

      <Tab.Screen
        name="AddToCard"
        component={AddToCardScreen}
        options={{
          tabBarIcon: () => <AntDesign name="shoppingcart" size={24} color="black" />,
          tabBarLabel: '',
          title: "Add to Card",
          tabBarVisible: false,
          // tabBarStyle: {
          //   display: 'none',
          // },
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={AddToCardScreen}
        options={{
          tabBarIcon: () => <AntDesign name="user" size={30} color="black" />,
          tabBarLabel: '',
          title: "User profile",
          tabBarVisible: false,
          // tabBarStyle: {
          //   display: 'none',
          // },
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);



// Home Stack Screen
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name='HomeStack'
      component={HomeScreen}
      options={{
        title: "Homepage",
        headerShown: false
      }}
    />
  </HomeStack.Navigator>
);

// Login Stack Screen
const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name='LoginTack'
      component={LoginScreen}
      options={{
        title: "Login",
        headerShown: false,
        tabBarVisible: false,
      }}
    />
  </LoginStack.Navigator>
);

// Signup Stack Screen
const SignupStackScreen = () => (
  <SignupStack.Navigator>
    <SignupStack.Screen
      name='SignupStack'
      component={SignupScreen}
      options={{
        title: "Sign Up",
        headerShown: false
      }}
    />
  </SignupStack.Navigator>
);

const AddToCardStackScreen = () => (
  <AddToCardStack.Navigator>
    <AddToCardStack.Screen
      name='add to card '
      component={AddToCardScreen}
      options={{
        title: "Add to card",
        headerShown: false
      }}
    />
  </AddToCardStack.Navigator>
);


const UserProfileStackScreen = () => (
  <UserProfileStack.Navigator>
    <UserProfile.Screen
     name='Profile'
     component={UserProfileScreen}
     options={{
       title: "Profile",
       headerShown: false
     }}
    />
    
  </UserProfileStack.Navigator>



)

export default App;
