import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import ImagesList from '../components/ImagesList';
import { imagesData } from './imagedata';

interface HomeScreenProps { }

const HomeScreen = (props: HomeScreenProps) => {
    return (
        <View style={styles.container}>
            <ImagesList 
                data={imagesData}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {}
});
