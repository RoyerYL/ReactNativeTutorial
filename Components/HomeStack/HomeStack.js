import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home/Home'; // Importa tu HomeScreen
import DetailScreen from './Detail/Detail'; // Importa la pantalla de detalle que crearás

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#d1d1d1',  // Fondo de la cabecera
        },
        headerTintColor: 'black',  // Color del texto de la cabecera
        headerTitleStyle: {
          textAlign:"center",
        },
      }}>
      <Stack.Screen name="Lista de articulos" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen}  options={{ headerShown: false, 
      }} />
    </Stack.Navigator>
  );
}
