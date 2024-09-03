import React ,{useState}from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      fetchArticulos();
    }, [])
  );
  const fetchArticulos = async () => {
    try {
      const response = await axios.get('https://backendrryl.onrender.com/tienda/articulo');
      setData(response.data.items);
    } catch (error) {
      console.error('Error al obtener los artículos:', error.response.data);
    }finally{
      setLoading(false)
    }
  };


  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('Detail', { item })}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </Pressable>
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
  title: {
    fontSize: 32,
  },
});
