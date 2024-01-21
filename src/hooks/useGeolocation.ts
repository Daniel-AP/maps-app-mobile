import Geolocation, { GeolocationResponse } from "@react-native-community/geolocation";
import { useEffect, useRef, useState } from "react";
import { getCurrentLocation } from "../helpers/getCurrentLocation";

export const useGeolocation = () => {

    const [loading, setLoading] = useState(true);
    const [initGeolocation, setInitGeolocation] = useState<GeolocationResponse | null>(null);
    const [currentGeolocation, setCurrentGeolocation] = useState<GeolocationResponse | null>(null);
    const [route, setRoute] = useState<GeolocationResponse[]>([]);
    const watchId = useRef(0);
    const following = useRef(true);

    const handlePositionChange = (position: GeolocationResponse) => {

        setCurrentGeolocation(position);
        setRoute(route => [...route, position]);

    };

    const followUserLocation = () => {

        watchId.current = Geolocation.watchPosition(
            handlePositionChange,
            error => console.log(error),
            { enableHighAccuracy: true, distanceFilter: 0 }
        );

    };

    const stopFollowUserLocation = () => {

        Geolocation.clearWatch(watchId.current);
        following.current = false;

    };

    useEffect(() => {

        getCurrentLocation()
            .then(position => {
                setCurrentGeolocation(position);
                setInitGeolocation(position);
                setRoute(route => [...route, position]);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
            });
        
    }, []);

    return {
        loading,
        initGeolocation,
        currentGeolocation,
        followUserLocation,
        stopFollowUserLocation,
        following,
        route
    };

};