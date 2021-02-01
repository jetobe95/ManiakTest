import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { AuthContext } from '../hooks/authContext';

interface SignOutScreenProps { }

const SignOutScreen = (props: SignOutScreenProps) => {
  const { signOut } = React.useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Button title='Sign out' onPress={() => signOut()} />
    </View>
  );
};

export default SignOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
