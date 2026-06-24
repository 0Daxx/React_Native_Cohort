import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
// State & Theme Hooks
import { useAuthStore } from "../context/AuthProvider";
import { useThemeStyles } from "../hooks/useThemeStyles";

// Screen Declarations
import HomeTabNavigator from "./HomeTabNavigator";
import SearchScreen from "../screens/SearchScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import CartScreen from "../screens/CartScreen";
import OnboardScreen from "../screens/OnboardScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function AppNavigator() {
  const { theme } = useThemeStyles();
  // const { isLoggedIn, isInitializing, checkAuthStatus } = useAuthStore();

  const navigation = useNavigation();
  const [ isLoggedIn , setIsLoggedIn ] = React.useState(true);



  // Define static structure conditionally based on state selector
return (

  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {isLoggedIn ? (
      <>
        <Stack.Screen name="MainTabs" component={HomeTabNavigator} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </>
    ) : (
      <>
        <Stack.Screen name="Onboard" component={OnboardScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </>
    )}
  </Stack.Navigator>
  )

}

/* in case it didnt work 
  // Run the initialization check once on boot
  // useEffect(() => {
  //   checkAuthStatus();
  // }, []);

  // Show a clean splash loading state while reading storage
  // if (isInitializing) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: "center",
  //         backgroundColor: theme.background,
  //       }}
  //     >
  //       <ActivityIndicator size="large" color={theme.primary} />
  //     </View>
  //   );
  // }



// return <Stack.Navigator />;

// const NavigationComponent = createStaticNavigation(RootStack);
// const NavigationComponent = createStaticNavigation(RootStack);

// return <RootStack />;
// return <NavigationComponent />;

return ; 
const RootStack = createStackNavigator({
  screens: isLoggedIn
    ? {
        MainTabs: {
          screen: HomeTabNavigator,
          options: { headerShown: false },
        },
        Search: SearchScreen,
        RestaurantDetails: RestaurantScreen,
        Cart: CartScreen,
      }
    : {
        Onboard: { screen: OnboardScreen, options: { headerShown: false } },
        SignIn: { screen: SignInScreen, options: { headerShown: false } },
        SignUp: { screen: SignUpScreen, options: { headerShown: false } },
      },
});
*/
