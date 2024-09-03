import 'react-native-gesture-handler'; // Importa esto al inicio
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeStack from './Components/HomeStack/HomeStack';
import FormProduct from './Components/Form/FormProduct';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeStack" >
          <Drawer.Screen name="HomeStack" component={HomeStack}
          options={{
            headerStyle: {
              backgroundColor: "black", 
            },
            headerTintColor: 'white', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
            
          }}  />
          <Drawer.Screen name="Form" component={FormProduct} 
          options={{
            headerStyle: {
              backgroundColor: "black", 
            },
            headerTintColor: 'white', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
