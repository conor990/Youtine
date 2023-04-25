import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity, focused} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import MindScreen from '../screens/MindScreen';
import BodyScreen from '../screens/BodyScreen';
import MealsScreen from '../screens/MealsScreen';
import ProfileScreen from '../screens/ProfileScreen';
//this is the guinee pig nav page 

const Tab = createBottomTabNavigator();


const BottomNav = ({ navigation }) => {

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
          ...styles.shadow
        }

      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../components/assets/bottomNavBar/homeBlack.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                shadowColor: focused ? 'green' : 'grey',

                shadowOffset: {
                  width: 1,
                  height: 1
                },
                shadowOpacity: 1,
              }}


            />
          </View>
        ),
      }} />


<Tab.Screen name="Arms" component={ArmsScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../components/assets/bottomNavBar/homeBlack.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                shadowColor: focused ? 'green' : 'grey',

                shadowOffset: {
                  width: 1,
                  height: 1
                },
                shadowOpacity: 1,
              }}


            />
          </View>
        ),
      }} />

      <Tab.Screen name="Mind" component={MindScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../components/assets/bottomNavBar/brainBlack.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                shadowColor: focused ? 'green' : 'grey',

                shadowOffset: {
                  width: 1,
                  height: 1
                },
                shadowOpacity: 1,
              }}
            />
          </View>
        ),
      }} />

      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../components/assets/bottomNavBar/weightBlack.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                shadowColor: focused ? 'green' : 'grey',

                shadowOffset: {
                  width: 1,
                  height: 1
                },
                shadowOpacity: 1,
              }}
            />
          </View>
        ),
        tabBarLabel: 'Profile'
      }} />

      <Tab.Screen name="Body" component={BodyScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../components/assets/bottomNavBar/weightBlack.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                shadowColor: focused ? 'green' : 'grey',

                shadowOffset: {
                  width: 1,
                  height: 1
                },
                shadowOpacity: 1,
              }}
            />
          </View>
        ),
      }} />

      <Tab.Screen name="Meals" component={MealsScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../components/assets/bottomNavBar/mealBlack.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                shadowColor: focused ? 'green' : 'grey',

                shadowOffset: {
                                  width:1,
                                  height: 1
                                },
                                shadowOpacity:1,
                            }}
                        />
                        
                    </View>
                ),
            }} />

        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
  shadow:{
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
  },

  icons: {
      width: 30,
      height: 30,
      shadowColor: focused ? '#6e9f7b' : 'grey',
  
      shadowOffset: {
        width:.5,
        height: .5
      },
      shadowOpacity:1,
    }
});




export default BottomNav;