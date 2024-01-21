import { createContext } from "react";
import { PermissionStatus } from "react-native-permissions";

interface Context {
    status: PermissionStatus | undefined;
    setStatus: React.Dispatch<React.SetStateAction<PermissionStatus | undefined>>;
}

export const PermissionsContext = createContext<Context>({} as Context);