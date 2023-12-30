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
import DetailScreen from './Screens/DetailScreen';

const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const SignupStack = createNativeStackNavigator();
const AddToCardStack = createNativeStackNavigator();
const UserProfileStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

// Home Stack Screen
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name='HomeStack'
      component={HomeScreen}
      options={{
        title: 'Homepage',
        headerShown: false,
      }}
    />

    <HomeStack.Screen
      name='DetailScreen'
      component={DetailScreen}
      options={{
        title: 'Product Details',
        headerTitleAlign: 'center',
        headerTransparent: true,
        // headerShown: false,
      }}
    />
  </HomeStack.Navigator>
);

// Login Stack Screen
const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name='LoginStack'
      component={LoginScreen}
      options={{
        title: 'Login',
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
        title: 'Sign Up',
        headerShown: false,
      }}
    />
  </SignupStack.Navigator>
);

// AddToCard Stack Screen
const AddToCardStackScreen = () => (
  <AddToCardStack.Navigator>
    <AddToCardStack.Screen
      name='AddToCardStack'
      component={AddToCardScreen}
      options={{
        title: 'Add to Card',
        headerShown: false,
      }}
    />
  </AddToCardStack.Navigator>
);

// UserProfile Stack Screen
const UserProfileStackScreen = () => (
  <UserProfileStack.Navigator>
    <UserProfileStack.Screen
      name='UserProfileStack'
      component={UserProfileScreen}
      options={{
        title: 'User Profile',
        headerShown: false,
      }}
    />
  </UserProfileStack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName='SignIn'
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffff',
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          height: 65,
        },
      }}
    >
      <Tab.Screen
        name='Homepage'
        component={HomeStackScreen}
        options={{
          tabBarIcon: () => <AntDesign name='home' size={30} color='black' />,
          tabBarLabel: '',
          title: 'Homepage',
          headerTitleAlign: 'center',
          headerShown: false
        }}
      />

      {/* <Tab.Screen
        name='SignIn'
        component={LoginStackScreen}
        options={{
          tabBarIcon: () => <AntDesign name='user' size={35} color='#fff' />,
          tabBarLabel: '',
          title: 'Sign In',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      /> */}

      {/* <Tab.Screen
        name='SignUp'
        component={SignupStackScreen}
        options={{
          tabBarIcon: () => <AntDesign name='user' size={30} color='black' />,
          tabBarLabel: '',
          title: 'Sign Up',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      /> */}

      <Tab.Screen
        name='AddToCard'
        component={AddToCardStackScreen}
        options={{
          tabBarIcon: () => <AntDesign name='shoppingcart' size={30} color='black' />,
          tabBarLabel: '',
          title: 'Add to Card',
        }}
      />
      <Tab.Screen
        name='UserProfile'
        component={UserProfileStackScreen}
        options={{
          tabBarIcon: () => <AntDesign name='user' size={30} color='black' />,
          tabBarLabel: '',
          title: 'User Profile',
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;

