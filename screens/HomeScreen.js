import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/reminders')
      .then((response) => response.json())
      .then((data) => setReminders(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>Recordatorios de Pago</Text>
      <Button title="Agregar Recordatorio" onPress={() => navigation.navigate('AddReminder')} />
      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}
