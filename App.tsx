import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { PermissionsProvider } from "./src/context/PermissionsProvider";

export const App = () => {

    return (
        <NavigationContainer>
            <PermissionsProvider>
                <AppNavigation />
            </PermissionsProvider>
        </NavigationContainer>
    );

};