import {StyleSheet, Text, View} from 'react-native';
import {Car} from "../res/types"

export interface Props {
    vehicle: Car;
    key: number;
};

export default function Vehicle({vehicle: {id, name, category}, key: number}: Props): JSX.Element {
    return (
        <View style={styles.vehicle} key={id}>

            <Text style={styles.number}>{`ТС #${id}`} </Text>

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
        marginTop: 8,
        borderRadius: 8,
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
