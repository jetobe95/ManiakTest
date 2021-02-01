import * as React from 'react';
import { Text, View, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { colors } from 'react-native-elements';
import PostRepositoryImpl from '../../data/posts_repository_impl';
import Post from '../../domain/post';
import ImagesList from '../components/ImagesList';

const postRepositoryImpl = new PostRepositoryImpl()
const HomeScreen = () => {
    const [posts, setPosts] = React.useState<Post[]>([])
    const [loadingPosts, setLoadingPosts] = React.useState<boolean>(false)


    React.useEffect(() => {
        setLoadingPosts(true)
        postRepositoryImpl.getPosts().then((response) => {
            response.fold(failure => {
                Alert.alert(failure.message, failure.message)
            }, posts => {
                setPosts(posts)
            })
        }).finally(() => setLoadingPosts(false))
    }, [])

    return (
        <View style={styles.container}>
            {loadingPosts ?
                <View style={styles.loadingContent}>
                    <ActivityIndicator color={colors.black} size='large' />
                    <Text style={{ fontWeight: '600' }}>Please Wait loading Images</Text>
                </View >
                : (
                    <ImagesList
                        data={posts}
                    />
                )}
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loadingContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
