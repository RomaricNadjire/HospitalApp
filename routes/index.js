/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../ecrans/tabs';
import MessageDetails from '../ecrans/MessagesDetails';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    
    <NavigationContainer>
       <Stack.Navigator
           initialRouteName="home"
           screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={BottomTabs} />
          <Stack.Screen name='InBox' component={MessageDetails} options={{headerShown: true}}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
