import { FlatList, StyleSheet, TextInput, Text, View, Pressable } from 'react-native';
import SocialMedia from './components/SocialMedia'

import {
  useState
} from 'react';

type Lembrete = {
  id: string; 
  texto: string
}

export default function App() {
  const [lembrete,  setLembrete] = useState('');
  const [lembretes, setLembretes] = useState <Lembrete[]> ([])
  const adicionar = () => {
    if(lembrete.trim() == '') return alert("Digite um lembrete válido")
    const novoLembrete: Lembrete = {
      id: Date.now().toString(),
      texto: lembrete
    }
    setLembretes( lembretesAtual => [
      novoLembrete, 
      ...lembretesAtual
    ])
    setLembrete('')
  }


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite um lembrete...'
        value={lembrete}
        onChangeText={(text) => {
          setLembrete(text.toUpperCase())
        }}
      />
      <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed? 'violet' : 'pink'
        },
        styles.button,
      ]}
      onPress={adicionar}
      >
        <Text style={styles.buttonText} >Salvar Lembrete</Text>
      </Pressable>
      <FlatList
        style={styles.list}
        data={lembretes}
        renderItem={(lembrete) => (
          <View>
            <Text style={styles.listItem}>{lembrete.item.texto}</Text>
          </View>
        )}
      />
      <SocialMedia/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    textAlign: 'center'
  },
  button: {
    width: '80%',
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 4,
    padding: 12,
    margin: 6,
    marginBottom: 10
  },
  buttonText: {
    color: 'purple',
    textAlign: 'center'
  },
  changedButton: {
    backgroundColor: 'pink',
  },
  list: {
    borderWidth: 1, 
    borderColor: 'gray',
    width: '80%',
    borderRadius: 4
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 12,
    textAlign: 'center',
    margin: 10
  }
});
