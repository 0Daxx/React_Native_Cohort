
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderScreen from "../screens/tabs/OrderScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

const Stack = createNativeStackNavigator();

export default function OrderNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Order"
        component={OrderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
} 