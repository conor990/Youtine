import { StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import MindScreen from "./screens/MindScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from "./navigation/tabs";
import HomeDrawer from './navigation/drawers/HomeDrawer';
import ArmsScreen from "./screens/body/ArmsScreen";
import LegsScreen from './screens/body/LegsScreen';
import AbsScreen from './screens/body/AbsScreen';
import ChestScreen from './screens/body/ChestScreen';
import MealDetailsScreen from './screens/meals/MealDetailsScreen';
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <HomeDrawer />
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Arms" component={ArmsScreen} />
        <Stack.Screen name="Chest" component={ChestScreen} />
        <Stack.Screen name="Abs" component={AbsScreen} />
        <Stack.Screen name="Legs" component={LegsScreen} />
        <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

