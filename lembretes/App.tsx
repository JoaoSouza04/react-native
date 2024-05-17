import { FlatList, StyleSheet, TextInput, Text, View, Pressable, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
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

  const remover = (lembrete: Lembrete) => {
    Alert.alert("Remover Lembrete", `Tem certeza que deseja remover o lembrete: ${lembrete.texto}?`, [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Remover',
        style: 'destructive',
        onPress: () => {
          setLembretes((lembretesAtual => (
            lembretesAtual.filter((index) => index.id != lembrete.id)
            //filtragem de elementos usando o filter
            //retorna uma lista com os elementos que satisfazem a condição da callback
          ))) 
        }
      }
    ])
    
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
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{lembrete.item.texto}</Text>
            <View style={styles.listItemButtons}>
            <Pressable
              onPress={() => remover(lembrete.item)}
            >
              <AntDesign
                name="delete"
                size={24}
              />
            </Pressable>
            <Pressable>
              <AntDesign
                name="edit"
                size={24}
              />
            </Pressable>
            </View>
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
    borderRadius: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: '#fbebfa',
    padding: 12,
    textAlign: 'center',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemText: {
    width: '70%',
    textAlign: 'center'
  },
  listItemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '30%'
  }
});
