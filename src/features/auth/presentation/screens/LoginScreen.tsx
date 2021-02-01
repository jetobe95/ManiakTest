import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Form } from 'react-final-form'
import InputFormField from '../../../../core/presentation/InputField';
import { AuthContext } from '../hooks/authContext';
interface LoginScreenProps {
    navigation: any
}
interface ValidationErrors {
    email?: string
    password?: string
}


const LoginScreen = (props: LoginScreenProps) => {
    const { signIn } = React.useContext(AuthContext)

    const [revealPassword, setRevealPassword] = React.useState<boolean>(false)


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
                            keyboardType: 'email-address',
                            leftIcon: {
                                name: 'person'
                            },
                            label: 'User email',
                            placeholder: 'your@email.com',
                        }}

                    />
                    <InputFormField

                        name='password'
                        inputProps={{
                            label: 'Password',
                            autoCorrect: false,
                            secureTextEntry: !revealPassword,
                            placeholder: 'Your password here!',
                            leftIcon: {
                                name: 'lock'
                            },
                            rightIcon: {
                                type: 'feather',
                                name: revealPassword ? 'eye-off' : 'eye',
                                onPress: () => setRevealPassword((prevState) => !prevState)
                            }
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
