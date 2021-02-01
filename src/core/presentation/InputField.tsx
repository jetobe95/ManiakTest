import * as React from 'react';
import { useField } from 'react-final-form'
import { View, StyleSheet } from 'react-native';
import { Input,InputProps } from 'react-native-elements';


interface InputFormFieldProps {
    name: string,
    inputProps?:InputProps
}

const InputFormField = (props: InputFormFieldProps) => {
    const { input,meta} = useField(props.name)
    return (
        <View style={styles.container}>
           <Input
                {...props.inputProps}
                onChangeText={input.onChange}
                onBlur={()=>input.onBlur()}
                onFocus={()=>input.onFocus()}
                value={input.value}
                errorMessage={ meta.error || meta.submitError}
                // invalid={(meta.error || meta.submitError) && meta.touched}}
           />
        </View>
    );
};

export default InputFormField;

const styles = StyleSheet.create({
    container: {},
});
