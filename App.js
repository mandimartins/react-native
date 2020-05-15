import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('Text form state');

  return (
    <View style={{ padding: 50 }}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Username" style={styles.input} />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    padding: 5,
    width: '80%',
  },
});
