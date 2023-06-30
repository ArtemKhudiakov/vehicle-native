import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import vehicles from "../res/vehicles.json";
import Vehicle from "../components/Vehicle";
import React, {useState} from "react";

// const Cars: Car[] = vehicles;

const buttonProps = {
    title: "Настройки",
    onPress: () => {
        console.log("Нажали на кнопку");
    }
}

export default function VehicleListScreen(): JSX.Element {
    const [showMap, setShowMap] = useState(false);
    const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const handleResetCLick = () => {
        setFilteredVehicles(vehicles)
    };

    const handleFilterButtonClick = () => {
        const filteredCars = selectedCategory
            ? vehicles.filter((car) => car.category === selectedCategory)
            : vehicles;

        console.log(filteredCars);
        setFilteredVehicles(filteredCars)
        // Делайте что-то с отфильтрованными данными
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
                                  alignItems: 'center',
                                  backgroundColor: selected ? 'blue' : 'white',
                                  borderRadius: 15,
                                  padding: 15
                              }}>
                <View
                    style={{
                        width: 0,
                        height: 0,
                        borderWidth: 0,
                    }}
                />
                <Text>{text}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.root}>
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

            <Button title="Применить" onPress={handleFilterButtonClick}/>
            {showMap ? (''
                // <MapView style={{flex: 1}}>
                //     {vehicles.map((vehicle) => (
                //         <Marker
                //             key={vehicle.id}
                //             coordinate={{
                //                 latitude: vehicle.coordinates.latitude,
                //                 longitude: vehicle.coordinates.longitude,
                //             }}
                //             title={`ТС #${vehicle.id}`}
                //             description={`Имя водителя: ${vehicle.name}`}
                //             // pinColor={getMarkerColor(vehicle.category)}
                //         />
                //     ))}
                // </MapView>
            ) : (
                <FlatList
                    data={filteredVehicles}
                    renderItem={({item: vehicle}) => <Vehicle key={vehicle.id} vehicle={vehicle}/>}
                    keyExtractor={(vehicle) => vehicle.id.toString()}
                />

                //
                // <View style={styles.listContainer}>
                //     {filteredVehicles.map((vehicle: Car) => (
                //         <Vehicle key={vehicle.id}
                //                  vehicle={vehicle}
                //
                //         />
                //     ))}
                //     <Button title="Сбросить" onPress={handleResetCLick}/>
                // </View>
            )
            }
            <Button title="Сбросить" onPress={handleResetCLick}/>

        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        backgroundColor: '#FFEADD',
    },
    listContainer: {
        // flexStyle: 1,
        backgroundColor: '#FFEADD',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
});
