import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Post from '../../domain/post';
import ImageItem from './ImageItem';

interface ImagesListProps {
    data: Post[]
}

const ImagesList = (props: ImagesListProps) => {
    return (
        <FlatList
            data={props.data}
            keyExtractor={(item) => item.id?.toString()}
            renderItem={({ item }) => <ImageItem post={item} />}
        />
    );
};

export default ImagesList;

const styles = StyleSheet.create({
    container: {}
});
