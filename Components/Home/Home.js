import 'react-native-gesture-handler'; // Importa esto al inicio
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

export default function HomeScreen() {
    const [data, setData] = useState([]);

    React.useEffect(() => {
        axios("https://backendrryl.onrender.com/tienda/articulo")
            .then(({ data }) => {
                setData(data.items);
            })
            .catch(error => console.error(error));
    }, []);

    const Item = ({ name }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item name={item.name} />}
                keyExtractor={item => item.id}
            />
            <Text> out</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
