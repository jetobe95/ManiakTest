import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../features/home/presentation/screens/HomeScreen';
import * as NavigationRoutes from './navigationRoutes'




const Stack = createStackNavigator();

const HomeStack = ()=>{
    return (
      <Stack.Navigator>
        <Stack.Screen name={NavigationRoutes.home}  component={HomeScreen} />
      </Stack.Navigator>
    )
}

export default HomeStack