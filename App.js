import 'react-native-gesture-handler'; // Importa esto al inicio
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeStack from './Components/HomeStack/HomeStack';
import FormProduct from './Components/Form/FormProduct';
import Clientes from './Components/ClienteStack/Clientes/Clientes';
import axios from 'axios';
import ClienteStack from './Components/ClienteStack/ClienteStack';

const Drawer = createDrawerNavigator();

export default function App() {
  axios.defaults.baseURL="http://localhost:3001/"
  // axios.defaults.baseURL="https://backendrryl.onrender.com/"
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Articulos" 
         screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Drawer.Screen name="Articulos" component={HomeStack}
           />
          <Drawer.Screen name="Crear Articulo" component={FormProduct} 
           />
          <Drawer.Screen name="Clientes" component={ClienteStack} 
           />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
