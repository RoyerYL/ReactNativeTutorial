import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet, Text, Pressable } from 'react-native';
import axios from 'axios';

const FormProduct = () => {
  const [form, setForm] = useState({
    name: "",
    id: "",
    stock: "0",
    stockMin: "0",
    costoPeso: "0.00",
    costoDolar: "0.00",
    precioVenta: "0.00",
    ganancia: "0",
    precioVenta_2: "0.00",
    ganancia_2: "0",
    descripcion: "",
    iva: "21",
    img: "",
    activo: true,
    CategoriaId: "0",
    ProvedorId: "1",
    precioEnDolar: false
  });

  const [error, setError] = useState({ name: '', id: '' }); // Estado para mensajes de error
  const [message, setMessage] = useState(''); // Estado para mensajes generales

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
    // Limpiar el mensaje de error correspondiente al campo cuando se edite
    if (error[key]) {
      setError({ ...error, [key]: '' });
    }
  };

  const validateForm = () => {
    let isValid = true;
    let newError = { name: '', id: '' };

    if (!form.name) {
      newError.name = 'El nombre es obligatorio';
      isValid = false;
    }

    if (!form.id) {
      newError.id = 'El ID es obligatorio';
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        await axios.post('https://backendrryl.onrender.com/tienda/articulo/articulo', {
          ...form,
          stock: parseInt(form.stock, 10),
          stockMin: parseInt(form.stockMin, 10),
          costoPeso: parseFloat(form.costoPeso).toFixed(2),
          costoDolar: parseFloat(form.costoDolar).toFixed(2),
          precioVenta: parseFloat(form.precioVenta).toFixed(2),
          ganancia: parseInt(form.ganancia, 10),
          precioVenta_2: parseFloat(form.precioVenta_2).toFixed(2),
          ganancia_2: parseInt(form.ganancia_2, 10),
          iva: parseInt(form.iva, 10),
          CategoriaId: parseInt(form.CategoriaId, 10),
          ProvedorId: parseInt(form.ProvedorId, 10)
        }).then(data => {
          setForm({
            name: "",
            id: "",
            stock: "0",
            stockMin: "0",
            costoPeso: "0.00",
            costoDolar: "0.00",
            precioVenta: "0.00",
            ganancia: "0",
            precioVenta_2: "0.00",
            ganancia_2: "0",
            descripcion: "",
            iva: "21",
            img: "",
            activo: true,
            CategoriaId: "0",
            ProvedorId: "1",
            precioEnDolar: false
          })
        }).catch(error => {
          setMessage('Error al crear el artículo.'); // Mensaje de error
          console.error('Error al crear el producto:', error.response.data);
        });
      } catch (error) {
        setMessage('Error al crear el artículo.');
        console.error('Error al crear el artículo:', error.response.data);
      }
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="ID"
          value={form.id}
          onChangeText={value => handleInputChange('id', value)}
        />
        {error.id ? <Text style={styles.error}>{error.id}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={form.name}
          onChangeText={value => handleInputChange('name', value)}
        />
        {error.name ? <Text style={styles.error}>{error.name}</Text> : null}

        <View style={styles.stock}>
          <Text style={styles.label}>Stock</Text>
          <TextInput
            style={styles.input}
            placeholder="Stock"
            inputMode="decimal"
            value={form.stock}
            onChangeText={value => handleInputChange('stock', value)}
          />
          <Text style={styles.label}>Stock mínimo</Text>
          <TextInput
            style={styles.input}
            placeholder="Stock Mínimo"
           inputMode="decimal"
            value={form.stockMin}
            onChangeText={value => handleInputChange('stockMin', value)}
          />
        </View>
        <View style={styles.stock}>
          <View>

            <View style={styles.stock}>
              <TextInput
                style={styles.input}
                placeholder="Costo en Pesos"
                inputMode="decimal"
                value={form.costoPeso}
                onChangeText={value => handleInputChange('costoPeso', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Costo en Dólares"
                inputMode="decimal"
                value={form.costoDolar}
                onChangeText={value => handleInputChange('costoDolar', value)}
              />
            </View>
            <View style={styles.stock}>

              <TextInput
                style={styles.input}
                placeholder="IVA"
                inputMode="decimal"
                value={form.iva}
                onChangeText={value => handleInputChange('iva', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Ganancia"
               inputMode="decimal"
                value={form.ganancia}
                onChangeText={value => handleInputChange('ganancia', value)}
              />
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Precio de Venta"
            inputMode="decimal"
            value={form.precioVenta}
            onChangeText={value => handleInputChange('precioVenta', value)}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Descripción"
          value={form.descripcion}
          onChangeText={value => handleInputChange('descripcion', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Imagen"
          value={form.img}
          onChangeText={value => handleInputChange('img', value)}
        />
        {/* <TextInput
          style={styles.input}
          placeholder="ID de Categoría"
          keyboardType="numeric"
          value={form.CategoriaId}
          onChangeText={value => handleInputChange('CategoriaId', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="ID de Proveedor"
          keyboardType="numeric"
          value={form.ProvedorId}
          onChangeText={value => handleInputChange('ProvedorId', value)}
        /> */}
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Crear Artículo</Text>
        </Pressable>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  stock: {
    display: "flex",
    flexDirection: "row"
  },
  label: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  }
});

export default FormProduct;
