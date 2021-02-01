import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../features/home/presentation/screens/HomeScreen';
import * as NavigationRoutes from './navigationRoutes'
import LoginScreen from '../features/auth/presentation/screens/LoginScreen';
import SplashScreen from '../features/auth/presentation/screens/SplashScreen';
const Stack = createStackNavigator();

interface NavigationProps {
}

const Navigation = (props: NavigationProps) => {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name={NavigationRoutes.splash} component={SplashScreen} />
                <Stack.Screen name={NavigationRoutes.login} component={LoginScreen} />
                <Stack.Screen name={NavigationRoutes.home} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

