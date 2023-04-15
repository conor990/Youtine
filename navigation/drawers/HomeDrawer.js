import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import HomeScreen from '../../screens/HomeScreen';
import MindScreen from '../../screens/MindScreen';
import BodyScreen from '../../screens/BodyScreen';
import MealsScreen from '../../screens/MealsScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    shadow: {
      shadowColor: '#5DF07E',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  });

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: '#fff',
          borderRadius: 35,
          height: 55,
          width: 320,
          paddingBottom: 10,
          marginLeft: 25,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../../components/assets/bottomNavBar/homeBlack.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  shadowColor: focused ? 'green' : 'grey',
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },
                  shadowOpacity: 1,
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Mind"
        component={MindScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../../components/assets/bottomNavBar/brainBlack.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  shadowColor: focused ? 'green' : 'grey',
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },
                  shadowOpacity: 1,
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Body"
        component={BodyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../../components/assets/bottomNavBar/weightBlack.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  shadowColor: focused ? 'green' : 'grey',
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },
                  shadowOpacity: 1,
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Meals"
        component={MealsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../../components/assets/bottomNavBar/mealBlack.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  shadowColor: focused ? 'green' : 'grey',
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },
                  shadowOpacity: 1,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeDrawer = () => {
  return (
  <Drawer.Navigator 
    screenOptions={{
    headerShown: false,
    tabBarShowLabel: false, }}
  >

    <Drawer.Screen name="←" component={Tabs} />

    <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerLabel: 'Profile',
            drawerIcon: ({ focused, color, size }) => (
              <View>
                <Text>👤</Text>
              </View>
            ),
          }}
        />
  </Drawer.Navigator>
  )}


  export default HomeDrawer;