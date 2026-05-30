import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';




const Tab = createBottomTabNavigator();
function Tabs(){
    return(
        <>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Order' component={OrderScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
            <Tab.Screen name='Search' component={SearchScreen} />
        </>
    )
}


export default function DynamicTabNavigator() {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}