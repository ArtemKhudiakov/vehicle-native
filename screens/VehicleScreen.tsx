import React, {useContext} from 'react';
import {Button, Linking, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {RouteProp} from "@react-navigation/native";
import {StackParams} from '../App';
import {message} from '../res/constants';
import {LanguageProviderContext} from "../components/LanguageProviderContext";
import getLanguageText, {getMarkerColor} from "../res/commonFunctions";

type VehicleScreenRouteProp = RouteProp<StackParams, 'VehicleScreen'>;

type VehicleScreenProps = {
    route: VehicleScreenRouteProp;
};

const VehicleScreen = ({route}: VehicleScreenProps) => {
    const {language} = useContext(LanguageProviderContext);
    const {vehicle} = route.params;
    const handleCallDriver = () => {
        Linking.openURL(`tel:${vehicle.contactNumber}`);
    };

    const handleMessageDriver = () => {
        Linking.openURL(`whatsapp://send?text=${message}&phone=${vehicle.contactNumber}`);
    };

    return (
        <View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: vehicle.coordinates.latitude,
                    longitude: vehicle.coordinates.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={vehicle.coordinates}
                        pinColor={getMarkerColor(vehicle)}/>
            </MapView>

            <View style={styles.info_container}>
                <Text style={styles.subtitle}>
                    {getLanguageText('category', language)}
                </Text>
                <Text style={styles.info}>{vehicle.category}</Text>
            </View>

            <View style={styles.info_container}>
                <Text style={styles.subtitle}>
                    {getLanguageText('driverName', language)}
                </Text>
                <Text style={styles.info}>{vehicle.name}</Text>
            </View>

            <View style={styles.info_container}>
                <Text style={styles.number}>
                    {getLanguageText('contactNumber', language)}
                </Text>
                <Text style={styles.info}>{vehicle.contactNumber}</Text>
            </View>

            <View style={styles.contact}>
                <Button color={'blue'} title={getLanguageText('call', language)} onPress={handleCallDriver}/>
                <Button color={'green'} title={getLanguageText('write', language)} onPress={handleMessageDriver}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    map: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    info_container: {
        display: 'flex',
        flexDirection: 'row'
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
    },
    info: {
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 10,
    },
    number: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
    },
    contact: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
    },

})

export default VehicleScreen;