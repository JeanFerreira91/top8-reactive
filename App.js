import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  // Variable to hold the stack navigator
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* HomeScreen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            presentation: 'modal',
            title: 'Top-8 UK',
            headerStyle: {
              backgroundColor: '#1f306e',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
