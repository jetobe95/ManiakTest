import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from 'react-native-elements';
import * as NavigationRoutes from '../../../../navigation/navigationRoutes'
interface SplashScreenProps {
    navigation: any
}

const SplashScreen = (props: SplashScreenProps) => {
    const navigateTo = (route:string) => props.navigation.replace(route)
    React.useEffect(() => {
        navigateTo(NavigationRoutes.home)
    }, [])
    return (
        <View style={styles.container}>
            <ActivityIndicator color={colors.black} size='large' />
            <Text>Please wait!</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
});
