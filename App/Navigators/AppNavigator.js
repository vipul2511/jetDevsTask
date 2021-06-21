import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../Containers/Home';
import Splash from '../utils/splash';
import Favorite from '../Containers/Favorite';
import Login from '../Containers/login/login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';    
const Stack = createStackNavigator();
 function AppNavigator() {
    return (
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash}    />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Tab" component={MyTabs} />
      </Stack.Navigator>
    )
}
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#1976D2',
          inactiveTintColor: 'lightgray'
        }}
        >
          <Tab.Screen name="Home" component={Home}
           options={{
             tabBarLabel: 'Home',
             tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home-outline" color={color} size={size} />
            ),
           }}
          />
          <Tab.Screen name="Favorite" component={Favorite}
           options={{
             tabBarLabel: 'Favorite',
             tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="favorite-border" color={color} size={size} />
            ),
           }}
          />
          </Tab.Navigator>
          )

}
export default AppNavigator;