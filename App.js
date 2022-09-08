import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  // Variable to hold the stack navigator
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
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
        {/* ProductScreen */}
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
