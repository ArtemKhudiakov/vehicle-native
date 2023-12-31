import {Button, FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import vehicles from "../res/vehicles.json";
import Vehicle from "../components/Vehicle";
import React, {useContext, useState} from "react";
import MapView, {Marker} from "react-native-maps";
import {StatusBar} from "expo-status-bar";
import {Car, CategoryType} from "../res/types";
import {LanguageProviderContext} from "../components/LanguageProviderContext";
import {VehicleTypesFilter} from "../res/vehicleTypesFilter";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {StackParams} from "../App";
import getLanguageText, {getMarkerColor} from "../res/commonFunctions";
import {translationMap} from "../res/constants";

type VehicleListScreenProp = StackNavigationProp<StackParams, 'VehicleListScreen'>;

export default function VehicleListScreen(): JSX.Element {
    const [showMap, setShowMap] = useState(false);
    const [filteredVehicles, setFilteredVehicles] = useState(vehicles as Car[]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const {language} = useContext(LanguageProviderContext);
    const navigation = useNavigation<VehicleListScreenProp>();
    const handleCategoryChange = (category: string): void => {
        setSelectedCategory(category);
    };

    const handleResetCLick = (): void => {
        setFilteredVehicles(vehicles as Car[])
        setSelectedCategory('')
    };

    const handleFilterButtonClick = (): void => {
        const filteredCars = selectedCategory
            ? vehicles.filter((car) => car.category === selectedCategory)
            : vehicles;
        setFilteredVehicles(filteredCars as Car[])
    };

    const navigateToVehicleScreen = (vehicle: Car): void => {
        navigation.navigate('VehicleScreen', {vehicle});
    };

    const translateCategory = (category: CategoryType): string => {
        return translationMap[category] || category;
    };

    const RadioBtn: React.FC<{ selected: boolean; onPress: () => void, text: string }> = ({
                                                                                              selected,
                                                                                              onPress,
                                                                                              text
                                                                                          }) => {
        return (
            <TouchableOpacity onPress={onPress}
                              style={{
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  backgroundColor: selected ? '#FCAEAE' : 'white',
                                  borderRadius: 15,
                                  marginTop: 10,
                                  padding: 8
                              }}>
                <View
                    style={styles.default_radio}
                />
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.root}>

            <StatusBar style="auto"/>

            <Text style={styles.title}>{getLanguageText('chooseCategory', language)}</Text>
            <Pressable style={styles.map} onPress={() =>
                showMap ? setShowMap(false) :
                    setShowMap(true)
            }>
                <Text style={styles.text_map}>{showMap ?
                    (getLanguageText('list', language))
                    : getLanguageText('map', language)}</Text>
            </Pressable>

            <View style={styles.wrapper}>
                {VehicleTypesFilter.map((category: CategoryType) => (
                    <View style={styles.radio} key={category}>
                        <RadioBtn
                            selected={selectedCategory === category}
                            onPress={() => handleCategoryChange(category)}
                            text={language === 'ru' ? category : translateCategory(category)}
                        />
                    </View>
                ))}
            </View>

            <View style={styles.categories_btn}>
                <Button title={getLanguageText('apply', language)} onPress={handleFilterButtonClick}/>
                <Button title={getLanguageText('reset', language)} onPress={handleResetCLick}/>
            </View>
            {showMap ? (
                <MapView style={styles.mapview}>
                    {filteredVehicles.map((vehicle: Car) => (
                        <Marker
                            key={vehicle.id}
                            coordinate={{
                                latitude: vehicle.coordinates.latitude,
                                longitude: vehicle.coordinates.longitude,
                            }}
                            title={`${getLanguageText('pinTitle', language)} #${vehicle.id}`}
                            description={`${getLanguageText('pinDescription', language)} ${vehicle.name}`}
                            pinColor={getMarkerColor(vehicle)}
                        />
                    ))}
                </MapView>
            ) : (
                <View>
                    {<FlatList
                        style={styles.listContainer}
                        data={filteredVehicles}
                        renderItem={({item: vehicle}) =>
                            <TouchableOpacity
                                onPress={() => navigateToVehicleScreen(vehicle)}
                            >
                                <Vehicle key={vehicle.id} vehicle={vehicle}/>
                            </TouchableOpacity>
                        }
                        keyExtractor={(vehicle) => vehicle.id.toString()}

                    />
                    }
                </View>
            )
            }
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        backgroundColor: '#FFEADD',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    },
    listContainer: {
        marginBottom: 252,
    },
    default_radio: {
        width: 0,
        height: 0,
        borderWidth: 0,
    },
    categories_btn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 0,
    },
    mapview: {
        height: '100%',
        width: '100%'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    radio: {
        flex: 1,
        marginRight: 8,
    },
    text: {},
    map: {
        position: 'absolute',
        backgroundColor: '#FF6666',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        shadowRadius: 10,
        top: 550,
        right: 20,
        width: 80,
        height: 80,
        zIndex: 1,
    },
    text_map: {
        fontSize: 20,
    }
});
