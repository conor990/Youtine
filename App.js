import HomeScreen from "./screens/HomeScreen";
import MindScreen from "./screens/MindScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from "./navigation/tabs";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

