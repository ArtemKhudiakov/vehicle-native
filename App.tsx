import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VehicleListScreen from "./screens/VehicleListScreen";
import SettingScreen from "./screens/SettingScreen";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StyleSheet} from "react-native";


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    tabBarAllowFontScaling: true,
                    tabBarLabelStyle: {fontSize: 20},
                    tabBarStyle: {backgroundColor: '#FFEADD'},
                    tabBarIcon: () => {
                        return null
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                }}>
                    <Tab.Screen name="Home" component={VehicleListScreen}/>
                    <Tab.Screen name="Settings" component={SettingScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#FFEADD',
    }
})