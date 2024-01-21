import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { openSettings, request } from "react-native-permissions";
import { PermissionsContext } from "../context/PermissionsContext";
import { Button } from "../components/Button";

export const PermissionsScreen = () => {

    const { setStatus } = useContext(PermissionsContext);

    const handlePress = async() => {

        const status = await request("android.permission.ACCESS_FINE_LOCATION");

        setStatus(status);

        if(status === "blocked") openSettings();

    };

    return (
        <View style={styles.container}>
            <Text>PermissionsScreen</Text>
            <Button title="press" onPress={handlePress} />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    }
});