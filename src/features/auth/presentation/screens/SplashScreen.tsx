import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from 'react-native-elements';
interface SplashScreenProps {
}

const SplashScreen = (props: SplashScreenProps) => {
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
