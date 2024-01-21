import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { PermissionsScreen } from "../screens/PermissionsScreen";
import { MapsScreen } from "../screens/MapsScreen";
import { LoadingScreen } from "../screens/LoadingScreen";
import { PermissionsContext } from "../context/PermissionsContext";

export type StackParams = {
    init: undefined;
    permissions: undefined;
    maps: undefined;
}

const Stack = createStackNavigator<StackParams>();

export const AppNavigation = () => {

    const { status } = useContext(PermissionsContext);

    if(!status) return <LoadingScreen />;

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                status !== "granted" && status !== "limited"
                    ? (
                        <Stack.Screen name="permissions" component={PermissionsScreen} />
                    )
                    : (
                        <Stack.Screen name="maps" component={MapsScreen} />
                    )
            }
        </Stack.Navigator>
    );

};