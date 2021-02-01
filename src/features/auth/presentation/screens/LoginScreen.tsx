import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Header, Button, Divider } from 'react-native-elements';
import { Form } from 'react-final-form'
import InputFormField from '../../../../core/presentation/InputField';
import AuthRepositoryImpl from '../../data/auth_repository_impl';
import  * as NavigationRoutes from '../../../../navigation/navigationRoutes';
import { AuthContext } from '../hooks/authContext';
interface LoginScreenProps { 
    navigation:any
}
interface ValidationErrors {
    email?: string
    password?: string
}


const authRepositoryImpl = new AuthRepositoryImpl()
const LoginScreen = (props: LoginScreenProps) => {
    const {signIn} = React.useContext(AuthContext)


    const validate = (values: any): ValidationErrors => {
        const errors: ValidationErrors = {}
        if (!values.email) errors.email = 'Email is required!'
        if (!values.password) errors.password = 'Password is required!'
        return errors
    }

    const onSubmit = async (values: any) => {
        signIn(values)
    }

    return (
        <Form
            initialValues={{
                email: 'challenge@maniak.co',
                password: "maniak2020"
            }}
            validate={validate}
            onSubmit={onSubmit}

        >
            {({ handleSubmit, submitting }) => (
                <View style={styles.container}>
                    <InputFormField
                        name='email'
                        inputProps={{
                            label: 'User email',
                            placeholder: 'your@email.com',
                        }}

                    />
                    <InputFormField

                        name='password'
                        inputProps={{
                            label: 'Password',
                            secureTextEntry: true,
                            placeholder: 'Your password here!'
                        }}
                    />
                    <View style={{ height: 20 }} />
                    <Button
                        title='Sign In!'
                        onPress={handleSubmit}
                        loading={submitting}
                    />
                </View>
            )}
        </Form>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
});
