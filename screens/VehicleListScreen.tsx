import {Button, FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import vehicles from "../res/vehicles.json";
import Vehicle from "../components/Vehicle";
import React, {useState} from "react";
import MapView, {Marker} from "react-native-maps";
import {StatusBar} from "expo-status-bar";
import {Car} from "../res/types";

// const Cars: Car[] = vehicles;

const buttonProps = {
    title: "Настройки",
    onPress: () => {
        console.log("Нажали на кнопку");
    }
}

export default function VehicleListScreen(): JSX.Element {
    const [showMap, setShowMap] = useState(true);
    const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const handleResetCLick = () => {
        setFilteredVehicles(vehicles)
        setSelectedCategory('')
    };

    const handleFilterButtonClick = () => {
        const filteredCars = selectedCategory
            ? vehicles.filter((car) => car.category === selectedCategory)
            : vehicles;

        console.log(filteredCars);
        setFilteredVehicles(filteredCars)
        // Делайте что-то с отфильтрованными данными
    };

    const getMarkerColor = (vehicle: Car): string => {
        switch (vehicle.category) {
            case 'Грузовой':
                return 'red';
            case 'Пассажирский':
                return 'blue';
            case 'Спецтранспорт':
                return 'green';
            default:
                return 'black';
        }
    }

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
                    style={{
                        width: 0,
                        height: 0,
                        borderWidth: 0,
                    }}
                />
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>

        );
    };

    return (
        <View style={styles.root}>
            <StatusBar style="auto"/>
            <Text style={styles.title}>Список ТС</Text>
            <Pressable style={styles.map} onPress={() =>
                showMap ? setShowMap(false) :
                    setShowMap(true)
            }>
                <Text style={styles.text_map}>{showMap ? 'Список' : 'Карта'}</Text>
            </Pressable>

            <View style={styles.wrapper}>
                <View style={styles.radio}>
                    <RadioBtn

                        selected={selectedCategory === 'Грузовой'}
                        onPress={() => handleCategoryChange('Грузовой')}
                        text={'Грузовой'}
                    />
                </View>
                <View style={styles.radio}>
                    <RadioBtn
                        selected={selectedCategory === 'Пассажирский'}
                        onPress={() => handleCategoryChange('Пассажирский')}
                        text={'Пассажирский'}
                    />
                </View>
                <View style={styles.radio}>
                    <RadioBtn
                        selected={selectedCategory === 'Спецтранспорт'}
                        onPress={() => handleCategoryChange('Спецтранспорт')}
                        text={'Спецтранспорт'}
                    />
                </View>


            </View>

            <View style={styles.categories_btn}>
                <Button title="Применить" onPress={handleFilterButtonClick}/>
                <Button title="Сбросить" onPress={handleResetCLick}/>
            </View>
            {showMap ? (
                <MapView style={{height: '100%', width: '100%'}}>
                    {filteredVehicles.map((vehicle) => (
                        <Marker
                            key={vehicle.id}
                            coordinate={{
                                latitude: vehicle.coordinates.latitude,
                                longitude: vehicle.coordinates.longitude,
                            }}
                            title={`ТС #${vehicle.id}`}
                            description={`Имя водителя: ${vehicle.name}`}
                            pinColor={getMarkerColor(vehicle)}
                        />
                    ))}
                    {/*<Button title={'Закрыть!'} onPress={() => setShowMap(false)}/>*/}
                </MapView>

            ) : (

                <FlatList
                    data={filteredVehicles}
                    renderItem={({item: vehicle}) => <Vehicle key={vehicle.id} vehicle={vehicle}/>}
                    keyExtractor={(vehicle) => vehicle.id.toString()}

                />
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
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,

    },
    listContainer: {
        // flexStyle: 1,
        backgroundColor: '#FFEADD',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    categories_btn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 0,

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
