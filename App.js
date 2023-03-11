import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado,setResultado] = useState('');

  const handleSubmit = () => {
    imc = Number(peso) / Math.pow(Number(altura), 2)
    setResultado(imc.toFixed(2))
  };

  return (
    <View style={styles.container}>
      <Text>Calculadora de IMC</Text>
      <Input
      label='Peso'
      value={peso}
      onChangeText={setPeso}
      />
      <Input
      label='Altura'
      value={altura}
      onChangeText={setAltura}
      />
      <Button title='Calcular' onPress={handleSubmit} />
      {resultado !== '' && <Text style={{ marginTop: 20 }}>Seu IMC é: {resultado}</Text>}    
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
