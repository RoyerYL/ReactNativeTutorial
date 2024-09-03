import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
export default function DetailScreen({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <Button
        onPress={() => navigation.goBack()}  // Acción personalizada para el botón de volver
        title="Atrás"
        color="#000"
      />
      <Text style={styles.title}>{item.id}</Text>
      <Text style={styles.title}>{item.name}</Text>

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
