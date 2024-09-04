import React from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function DetailScreen({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();
  console.log(item);
  
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Volver</Text> 
      </Pressable>
     
      <Text style={styles.title}>{item.id}</Text>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.title}>{item.stock}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});
