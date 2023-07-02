import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VehicleListScreen from './VehicleListScreen';
import SettingScreen from './SettingScreen';
import {LanguageProviderContext} from '../components/LanguageProviderContext';
import getLanguageText from "../res/commonFunctions";

const Tab = createBottomTabNavigator();

function HomeScreen() {
    const {language} = React.useContext(LanguageProviderContext);

    return (

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
            <Tab.Screen options={{headerShown: false}}
                        name={getLanguageText('vehicleList', language)}
                        component={VehicleListScreen}/>
            <Tab.Screen options={{headerShown: false}}
                        name={getLanguageText('settings', language)}
                        component={SettingScreen}/>
        </Tab.Navigator>
    )
}

export default HomeScreen;

