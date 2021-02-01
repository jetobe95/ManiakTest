import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Header, Button, Divider } from 'react-native-elements';
import { Form } from 'react-final-form'
import InputFormField from '../../../../core/presentation/InputField';
interface LoginScreenProps { }
interface ValidationErrors {
    email?: string
    password?: string
}
const LoginScreen = (props: LoginScreenProps) => {


    const validate = (values: any): ValidationErrors => {
        const errors: ValidationErrors = {}
        if (!values.email) errors.email = 'Email is required!'
        if (!values.password) errors.password = 'Password is required!'

        return errors
    }

    const onSubmit = async (values: any) => {
        Alert.alert('', JSON.stringify(values, null, 4))
    }

    return (
        <Form
            validate={validate}
            onSubmit={onSubmit}
        >
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <InputFormField
                        name='email'
                        inputProps={{
                            label: 'Email',
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
                    <Button title='Sign In!' onPress={handleSubmit} />
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
