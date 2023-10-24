import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartGame from './components/StartGame'
import HomeScreen from './components/HomeScreen'

const Stack = createStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PelinAloitus" component={StartGame} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};
