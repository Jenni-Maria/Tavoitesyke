import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState('')
  const [lower, setLower] = useState(0)

  const calculate = () =>{
    const result = age.replace(220-age)*0.65
    setLower(result)
  }
  return (

    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
      keyboardType='decimal-pad'
      value={age}
      onChangeText={text => setAge(text)}
      style={styles.field}
      />
<Text style={styles.field}>Hr limits</Text>
<Text style={styles.field}>{lower.toFixed(1)}</Text>
<Button title='Calculate' onPress={calculate}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  field: {
    marginBottom: 10,
  }
});