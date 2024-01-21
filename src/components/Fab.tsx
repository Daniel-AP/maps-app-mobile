import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
    icon: string;
    onPress: () => void
}

export const Fab = ({ icon, onPress }: Props) => {

    return (
        <TouchableOpacity activeOpacity={.5} onPress={onPress} style={styles.container}>
            <Icon name={icon} size={27} color={"white"} />
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    container: {
        elevation: 5,
        backgroundColor: "black",
        height: 50,
        width: 50,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center"
    }
});