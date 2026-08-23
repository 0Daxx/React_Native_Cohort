import { createStaticNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens 
import OnboardScreen from "../screens/OnboardScreen";
import HabitScreen from "../screens/HabitScreen";
import ProgressScreen from "../screens/ProgressScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Ionicons } from '@react-native-vector-icons/ionicons/';

const MyTabs = createBottomTabNavigator({
  screenOptions: ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {

      type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];
      let iconName: IoniconsName = "home";

      if (route.name === "Home") {
        iconName = focused ? "home" : "home-outline";
      } else if (route.name === "Settings") {
        iconName = focused ? "settings" : "settings-outline";
      } else if (route.name === "Progress") {
        iconName = focused ? "bar-chart" : "bar-chart-outline";
      } else if (route.name === "Onboard") {
        iconName = focused ? "person-circle" : "person-circle-outline";
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    // You can return any component that you like here!
  }),
  screens: {
    Home: HabitScreen,
    Onboard: { screen: OnboardScreen, options: {} },
    // Profile: ,
    Settings: SettingsScreen,
    Progress: ProgressScreen,
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return <Navigation />;
}
