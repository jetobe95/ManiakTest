import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as NavigationRoutes from './navigationRoutes'
import LoginScreen from '../features/auth/presentation/screens/LoginScreen';
import SplashScreen from '../features/auth/presentation/screens/SplashScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';
import SignOutStack from './SignOutStack';
import { AuthContext } from '../features/auth/presentation/hooks/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthRepositoryImpl from '../features/auth/data/auth_repository_impl';
import { Alert } from 'react-native';
import ModalLoading from '../core/presentation/ModalLoading';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


interface NavigationProps {
}


const authRepositoryImpl = new AuthRepositoryImpl()

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = 'home'

          if (route.name === NavigationRoutes.home) {
            iconName = focused
              ? 'home-outline'
              : 'home';
          } else if (route.name === NavigationRoutes.signOut) {
            iconName = focused ? 'enter-outline' : 'enter-outline';
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        }
      })}
    >
      <Tab.Screen name={NavigationRoutes.home} component={HomeStack} />
      <Tab.Screen name={NavigationRoutes.signOut} component={SignOutStack} />
    </Tab.Navigator>
  )
}

const Navigation = () => {

  const [loading, setLoading] = React.useState(false)


  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: any) => {
        setLoading(true)
        const response = await authRepositoryImpl.login(data.email, data.password)
        setLoading(false)
        response.fold(left => {
          Alert.alert('Error sign in', left.message)
        }, async (token) => {
          await AsyncStorage.setItem('userToken', token);
          dispatch({ type: 'SIGN_IN', token: token });
        })

      },
      signOut: async () => {
        await AsyncStorage.clear();
        dispatch({ type: 'SIGN_OUT' })
      },
    }),
    []
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  if (state.isLoading) return <SplashScreen />
  return (
    <>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer >
          <Stack.Navigator>
            {state.userToken == null ? (
              <Stack.Screen name={NavigationRoutes.login} component={LoginScreen} />
            ) : (
                <Stack.Screen name={NavigationRoutes.homeStack} options={{ headerShown: false }} component={HomeTabNavigator} />
              )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
      <ModalLoading visible={loading} />
    </>
  );
};

export default Navigation;

