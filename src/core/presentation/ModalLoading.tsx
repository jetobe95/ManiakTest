import * as React from 'react';
import { Text, View, StyleSheet, Modal, ActivityIndicator } from 'react-native';
import { colors } from 'react-native-elements';

interface ModalLoadingProps {
    visible: boolean
}

const ModalLoading = ({ visible }: ModalLoadingProps) => {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ActivityIndicator size='large' color={colors.black} />
                    <Text style={styles.modalText}>Please Wait</Text>
                </View>
            </View>
        </Modal>
    );
};

export default ModalLoading;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor:'rgba(0,0,0,0.6)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
