import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import VehicleListScreen from "./screens/VehicleListScreen";
import {Header} from "react-native-elements";


export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Header
                leftComponent={{icon: 'menu', color: '#3F2305', size: 40}}
                centerComponent={{text: 'Список Авто', style: {color: '#3F2305', fontSize: 30}}}
                rightComponent={{icon: 'home', color: '#3F2305', size: 40}}
                containerStyle={{
                    backgroundColor: '#DFD7BF',
                    justifyContent: 'space-around',
                }}
            />
            <VehicleListScreen/>
            {/*<MapView style={styles.map}>*/}

            {/*</MapView>*/}
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text style={styles.text}>Open up App.tsx to start working on your app!!!!!!!!!!!11</Text>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    text: {
        color: 'red',
        fontSize: 20,
        backgroundColor: 'yellow'
    },
    map: {
        width: "60%",
        height: "60%",
    }
});
