import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import VehicleListScreen from './screens/VehicleListScreen';
import SettingScreen from './screens/SettingScreen';
import {LanguageProvider} from './components/LanguageProviderContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import VehicleScreen from "./screens/VehicleScreen";
import {Car} from "./res/types";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export type StackParams = {
    VehicleListScreen: undefined;
    VehicleScreen: { vehicle: Car };
};

export default function App() {

    return (
        <LanguageProvider>
            <SafeAreaProvider>

                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{title: "ТС Трекер"}}
                        />

                        <Stack.Screen
                            name="List"
                            component={VehicleListScreen}
                            options={{title: "Список ТС"}}
                        />
                        <Stack.Screen
                            name="VehicleScreen"
                            component={VehicleScreen as any}
                            options={{title: 'Транспортное Средство'}}
                        />
                        <Stack.Screen
                            name="Settings"
                            component={SettingScreen}
                            options={{title: "Настройки"}}
                        />
                    </Stack.Navigator>
                </NavigationContainer>

            </SafeAreaProvider>
        </LanguageProvider>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#FFEADD',
    }
})