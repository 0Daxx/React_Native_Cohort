import { createDrawerNavigator } from "@react-navigation/drawer";

import LogoutScreen from "../profile/LogoutScreen";

import ProfileMain from "../profile/ProfileMain";
import MyOrders from "../profile/MyOrders";
import SettingsScreen from "../profile/SettingsScreen";
import HelpScreen from "../profile/HelpScreen";
import { Ionicons } from "@expo/vector-icons";


const Drawer = createDrawerNavigator();
function ProfileDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="My Profile"
    >
      <Drawer.Screen name="My Profile" component={ProfileMain} 
        options={{
          drawerIcon: () => (
            <Ionicons name="person-outline" size={24} color="black" />
          ),
        }}
        />
      <Drawer.Screen name="My Orders" component={MyOrders} 
        options={{
          drawerIcon: () => (
            <Ionicons name="cart-outline" size={24} color="black" />
          ),
        }}
        />
      <Drawer.Screen name="Settings" component={SettingsScreen} 
        options={{
          drawerIcon: () => (
            <Ionicons name="settings-outline" size={24} color="black" />
          ),
        }}
        />
      <Drawer.Screen name="Help" component={HelpScreen} 
        options={{
          drawerIcon: () => (
            <Ionicons name="help-outline" size={24} color="black" />
          ),
        }}
        />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="log-out-outline" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function ProfileScreen() {
  return (
    <ProfileDrawer />
  );
}
