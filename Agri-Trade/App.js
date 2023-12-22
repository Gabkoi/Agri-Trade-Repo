// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

// Screens
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/Login';
import SignupScreen from './Screens/SignUp';
// import { KeyboardAvoidingView } from 'react-native';



const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const SignupStack = createNativeStackNavigator();



// This is the function that
const Tab = createBottomTabNavigator();

// this is going to contain all of the function

// this contain the Home
const HomeStackScreen = () => {
  return (
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
};


// This contain the  Login
const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name='LoginTack'
        component={LoginScreen}
        options={{
          title: "login",
          headerShown: false,
          tabBarVisible: false,
        }}
      />
    </LoginStack.Navigator>
  );
};

// this contain the Signup
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


const App = () => (
  <NavigationContainer>
    <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#ffff',
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            height: 70,
          },
        }}
        initialRouteName='SignIn'
      >
      <Tab.Screen
        name="Homepage"
        component={HomeStackScreen} 
        options={{
          tabBarIcon:() => <AntDesign name="home" size={30} color="black" />,
          headerShown: false,
          tabBarLabel: '',
          title: "Create New Task",
          headerTitleAlign: "center",
        }}
      />

      <Tab.Screen
          name="SignIn"
          component={LoginScreen}
          options={{
            tabBarIcon: () => <AntDesign name="user" size={35} color="#fff" />,
            tabBarLabel: '',
            title: "Sign In",
            headerTitleAlign: "center",
            // headerShown: false,
            tabBarStyle: {
              display: 'none',
             },
          }}
        />

      <Tab.Screen
        name="SignUp"
        component={SignupStackScreen} 
        options={{
          tabBarIcon: () => <AntDesign name="user" size={30} color="black" />,  tabBarLabel: '',
            title: "Create New Task",
            headerTitleAlign: "center",
            headerShown: false
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App