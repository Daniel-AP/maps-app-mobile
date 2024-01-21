import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

interface Props {
    title: string;
    onPress: () => void
}

export const Button = ({ title, onPress }: Props) => {

    return (
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple("white", false)}
        >
            <View style={styles.container}>
                <Text style={styles.text}>{ title }</Text>
            </View>
        </TouchableNativeFeedback>
    );

};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "black",
        borderRadius: 15,
    },
    text: {
        color: "white",
        textTransform: "uppercase"
    }
});