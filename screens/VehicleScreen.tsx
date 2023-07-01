import React, {useContext} from 'react';
import {Button, Linking, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {RouteProp} from "@react-navigation/native";
import {StackParams} from '../App';
import {message} from '../res/message.js';
import {LanguageProviderContext} from "../components/LanguageProviderContext";

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
                <Marker coordinate={vehicle.coordinates}/>
            </MapView>
            <Text style={styles.title}>
                {language === 'en' ? 'Category:' : 'Категория ТС:'} {vehicle.category}
            </Text>
            <Text style={styles.name}>
                {language === 'en' ? 'Driver name:' : 'Имя водителя:'} {vehicle.name}
            </Text>
            <Text
                style={styles.number}>
                {language === 'en' ? 'Driver contact number:' : 'Контактный номер водителя:'} {vehicle.contactNumber}
            </Text>
            <View style={styles.contact}>
                <Button color={'blue'} title={language === 'en' ? 'Call' : 'Позвонить'} onPress={handleCallDriver}/>
                <Button color={'green'} title={language === 'en' ? 'Write' : 'Написать'} onPress={handleMessageDriver}/>
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
    },
    name: {
        fontSize: 16,
        marginBottom: 10,
        marginLeft: 10,
    },
    number: {
        fontSize: 16,
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