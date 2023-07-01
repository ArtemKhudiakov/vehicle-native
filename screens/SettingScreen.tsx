import {Button, StyleSheet, View} from 'react-native';
import {Text} from "react-native-elements";
import {useContext} from "react";
import {LanguageProviderContext} from "../components/LanguageProviderContext";


export default function SettingScreen(): JSX.Element {
    const {language, setLanguage} = useContext(LanguageProviderContext);

    const handleLanguageToggle = () => {
        const newLanguage = language === 'en' ? 'ru' : 'en';
        setLanguage(newLanguage);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.language}>{language === 'en' ? 'Language:' : 'Язык:'} {language}</Text>
            <Button title={language === 'en' ? 'Toggle Language' : 'Переключить язык'} onPress={handleLanguageToggle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    language: {
        fontSize: 30,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',

    }
})
