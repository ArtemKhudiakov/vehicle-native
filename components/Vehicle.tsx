import {StyleSheet, Text, View} from 'react-native';
import {Car} from "../res/types"
import getLanguageText from "../res/commonFunctions";
import {useContext} from "react";
import {LanguageProviderContext} from "./LanguageProviderContext";

export interface Props {
    vehicle: Car;
    key: number;
}

export default function Vehicle({vehicle: {id, name, category}}: Props): JSX.Element {
    const {language} = useContext(LanguageProviderContext);
    return (
        <View style={styles.vehicle} key={id}>
            <Text style={styles.number}>{`${getLanguageText('title', language)} #${id}`} </Text>
            <Text style={styles.name}>{` ${name}`} </Text>
            <Text style={styles.category}>{` ${category}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    vehicle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 16,
        marginTop: 6,
        borderRadius: 20,
        elevation: 4
    },
    number: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    category: {
        fontSize: 14,
        color: '#888888'
    }
})
