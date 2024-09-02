import 'react-native-gesture-handler'; // Importa esto al inicio
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-web';

export default function HomeScreen() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        axios("https://backendrryl.onrender.com/tienda/articulo")
            .then(({ data }) => {
                setData(data.items);
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const Item = ({ name }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>

                {loading && <ActivityIndicator size="large" color="#0000ff" />}

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
