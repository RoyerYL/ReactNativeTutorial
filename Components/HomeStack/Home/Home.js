import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Pressable, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import buildQueryParams from '../../../Script/QueryFilterPath';

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [filter, setFilter] = useState({
    name: "",
    id: "",
    page: 1,
    pageSize: 15,
    orderBy: 'name',
    orderDirection: 'ASC'
  })
  useFocusEffect(
    React.useCallback(() => {
      fetchArticulos(filter);
    }, [])
  );
  const fetchArticulos = async (filter) => {
    try {
      const response = await axios.get(`https://backendrryl.onrender.com/tienda/articulo` + buildQueryParams(filter));
      console.log(response.data);

      setData(response.data.items);
    } catch (error) {
      console.error('Error al obtener los artículos:', error.response.data);
    } finally {
      setLoading(false)
    }
  };


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.id}</Text>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.title}>{item.stock}</Text>
      <Pressable onPress={() => navigation.navigate('Detail', { item })} color="#0070ff" >
        <Text style={{ color: 'white' }}>Ver Detalles</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    backgroundColor: '#d1d1d1',
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase'
  },
  title: {
    fontSize: 32,
  },
});
