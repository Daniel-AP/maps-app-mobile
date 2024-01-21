import { StyleSheet, View } from "react-native";
import { Map } from "../components/Map";
import { Fab } from "../components/Fab";
import { getCurrentLocation } from "../helpers/getCurrentLocation";
import { useRef } from "react";
import MapView from "react-native-maps";

export const MapsScreen = () => {

    const mapRef = useRef<MapView>({} as MapView);

    const handleLocate = async() => {

        const { coords } = await getCurrentLocation();

        mapRef.current.animateCamera({
            center: {
                latitude: coords.latitude,
                longitude: coords.longitude
            },
            zoom: 18,
            heading: 0
        }, {
            duration: 1500
        });

    };

    return (
        <View style={styles.container}>
            <Map mapRef={mapRef} />
            <View style={styles.uicontainer}>
                <Fab onPress={handleLocate} icon="locate-outline" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    uicontainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 20,
        gap: 10
    }
});