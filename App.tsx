import * as React from 'react';
import {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VehicleListScreen from './screens/VehicleListScreen';
import SettingScreen from './screens/SettingScreen';
import {LanguageProvider, LanguageProviderContext} from './components/LanguageProviderContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import VehicleScreen from "./screens/VehicleScreen";
import {Car} from "./res/types";
import Home from "./components/Home";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export type StackParams = {
    VehicleListScreen: undefined;
    VehicleScreen: { vehicle: Car };
};
export default function App() {
    const {language} = useContext(LanguageProviderContext);

    return (
        <LanguageProvider>
            <SafeAreaProvider>

                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Home"
                            component={Home}
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