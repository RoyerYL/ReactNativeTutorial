import { createStackNavigator } from "@react-navigation/stack";
import Clientes from "./Clientes/Clientes";
import DetailCliente from "./Detail/DetailCliente";

const Stack = createStackNavigator();

export default function ClienteStack(){
    return(
        // Stack Navigator con las rutas para clientes
        <Stack.Navigator>
            <Stack.Screen name="Clientes" component={Clientes} />
            <Stack.Screen name="Detail" component={DetailCliente}  options={{ headerShown: false, }} />
        </Stack.Navigator>
    )
}