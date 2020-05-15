import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('Text form state');

  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TextInput
          placeholder="Username"
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 2,
            padding: 5,
            width: '80%',
          }}
        />
        <Button title="App" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
