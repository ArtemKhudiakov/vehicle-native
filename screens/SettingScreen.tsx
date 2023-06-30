import {StyleSheet, View} from 'react-native';
import {Text} from "react-native-elements";


export default function SettingScreen(): JSX.Element {


    return (
        <View>
            <Text>Настройки </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,

    },
})
