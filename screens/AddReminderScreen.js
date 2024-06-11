import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function AddReminderScreen({ navigation }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleAddReminder = () => {
    fetch('http://localhost:3000/reminders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, date }),
    })
      .then((response) => response.json())
      .then((data) => {
        navigation.goBack();
      })
      .catch((error) => console.error(error));
  };

  return (
    <View>
      <Text>Agregar Recordatorio</Text>
      <TextInput
        placeholder="Nombre del Servicio"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Fecha de Pago"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Guardar" onPress={handleAddReminder} />
    </View>
  );
}
