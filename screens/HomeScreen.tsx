import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VehicleListScreen from './VehicleListScreen';
import SettingScreen from './SettingScreen';
import {LanguageProviderContext} from '../components/LanguageProviderContext';


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
                        name={language === 'en' ? 'Vehicle List' : 'Список ТС'}
                        component={VehicleListScreen}/>
            <Tab.Screen options={{headerShown: false}}
                        name={language === 'en' ? 'Settings' : 'Настройки'}
                        component={SettingScreen}/>
        </Tab.Navigator>

    )
}

export default HomeScreen;

