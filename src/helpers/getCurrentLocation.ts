import Geolocation, { GeolocationResponse } from "@react-native-community/geolocation";

export const getCurrentLocation = (): Promise<GeolocationResponse> => {

    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            position => resolve(position),
            err => reject(err),
            { enableHighAccuracy: true }
        );
    });

};