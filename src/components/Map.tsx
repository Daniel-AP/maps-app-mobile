import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useGeolocation } from "../hooks/useGeolocation";

interface Props {
    mapRef?: React.MutableRefObject<MapView>
}

export const Map = ({ mapRef }: Props) => {

    const {
        loading,
        initGeolocation,
        currentGeolocation,
        followUserLocation,
        stopFollowUserLocation,
        following,
        route
    } = useGeolocation();

    const handlePan = () => {

        if(following.current) following.current = false;

    };

    useEffect(() => {

        followUserLocation();

        return () => stopFollowUserLocation();

    }, []);

    useEffect(() => {

        if(!loading && following.current) mapRef?.current.animateCamera({
            center: {
                latitude: currentGeolocation?.coords.latitude || 0,
                longitude: currentGeolocation?.coords.longitude || 0
            },
        });

    }, [currentGeolocation]);

    return (
        <>
            {
                !loading
                    ? (
                        <MapView
                            ref={mapRef}
                            provider="google"
                            style={styles.map}
                            initialRegion={{
                                latitude: initGeolocation?.coords.latitude || 0,
                                longitude: initGeolocation?.coords.longitude || 0,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.01,
                            }}
                            showsIndoorLevelPicker={false}
                            showsUserLocation
                            showsMyLocationButton={false}
                            onPanDrag={handlePan}
                        >
                            <Marker
                                coordinate={{
                                    latitude: initGeolocation?.coords.latitude || 0,
                                    longitude: initGeolocation?.coords.longitude || 0,
                                }}
                                title="Hola Mundo"
                                description="Descripcion del marcador"
                            />
                            <Polyline
                                coordinates={route.map(({ coords }) => ({ latitude: coords.latitude, longitude: coords.longitude }))}
                                strokeColor="black"
                                strokeWidth={5}
                            />
                        </MapView>

                    ): null
            }
        </>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1
    },
});