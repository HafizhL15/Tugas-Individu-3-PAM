import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './source/display/Home';
import Detail from './source/display/Details';

const Stack = createNativeStackNavigator();

function App(){
return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Details' component={Detail}/>
        </Stack.Navigator>
    </NavigationContainer>
)
}
export default App;