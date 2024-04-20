/* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Messages from '../Messages';
import Home from '../Home';
import Settings from '../Settings';

const BottomTabs = () => {
     const Tab = createMaterialBottomTabNavigator();
     return (
         <Tab.Navigator
           initialRouteName="Message"
           screenOptions={{
             tabBarActiveTintColor: '#e91e63',
           }}
         >
          <Tab.Screen
             name="Dashboard"
             component={Home}
             options={{
               tabBarLabel: 'Accueil',
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="home" color={color} size={20} />
               ),
             }}
           />
           <Tab.Screen
             name="Messages"
             component={Messages}
             options={{
               tabBarLabel: 'Méssages',
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="chat" color={color} size={20} />
               ),
               //tabBarBadge: 1,
             }}
           />
           <Tab.Screen
             name="Settings"
             component={Settings}
             options={{
               tabBarLabel: 'Paramètres',
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="account-settings" color={color} size={20} />
               ),
             }}
           />
         </Tab.Navigator>
   );
}

export default BottomTabs