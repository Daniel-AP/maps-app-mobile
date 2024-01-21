import React, { PropsWithChildren, useEffect, useState } from "react";
import { PermissionStatus, check } from "react-native-permissions";
import { PermissionsContext } from "./PermissionsContext";
import { AppState } from "react-native";

export const PermissionsProvider = ({ children }: PropsWithChildren) => {

    const [status, setStatus] = useState<PermissionStatus>();

    const checkPermission = async() => {

        const permissionStatus = await check("android.permission.ACCESS_FINE_LOCATION");
        setStatus(permissionStatus);

    };

    useEffect(() => {

        checkPermission();

        const listener = AppState.addEventListener("change", state => {

            if(state !== "active") return;

            checkPermission();
        });

        return () => listener.remove();

    }, []);

    return <>
        <PermissionsContext.Provider value={{status, setStatus}}>
            { children }
        </PermissionsContext.Provider>
    </>;

};