import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Post from '../../domain/post';

interface ImageItemProps {
  post: Post
}

const ImageItem = ({
  post
}: ImageItemProps) => {
  const [errorImage,setErrrImage]  = React.useState('')
  return (
    <View style={styles.container}>
      <View style={styles.postContent}>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postTitle}>{errorImage}</Text>
      </View>
      <Image
        source={{ uri: post.image }}
        onError={(error)=>setErrrImage('Error al obtener la imagen')}
        height={200}
        style={styles.image}
        resizeMode={'cover'}
        
      />
      <View style={styles.postContent}>
        <Text style={styles.postDescription}>{post.description}</Text>
      </View>
    </View>
  );
};

export default ImageItem;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 200
  },
  postContent: {
    padding: 10
  },
  postDescription: {
    fontSize: 13
  },
  postTitle: {
    fontWeight: '700',
    fontSize: 13
  }
});
