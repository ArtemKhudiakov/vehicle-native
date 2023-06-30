import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text} from 'react-native';


export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text style={styles.text}>Open up App.tsx to start working on your app!!!!!!!!!!11</Text>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'red',
        fontSize: 20,
        backgroundColor: 'yellow'
    },
    map: {
        width: '60%',
        height: '60%',
    },
});
