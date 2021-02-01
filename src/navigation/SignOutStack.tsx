import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as NavigationRoutes from './navigationRoutes'
import SignOutScreen from '../features/auth/presentation/screens/SignOutScreen';




const Stack = createStackNavigator();
const SignOutStack = ()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigationRoutes.signOut}  component={SignOutScreen} />
    </Stack.Navigator>
  )
}
export default SignOutStack;
