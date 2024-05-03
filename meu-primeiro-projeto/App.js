import { React, Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'

export default class Soma extends Component {
  state = {
    number1: 0,
    number2: 0,
    result: 0
  }
  somar() {
    const result = this.state.number1 + this.state.number2
    this.setState({ result })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Bem vindo ao meu App React Native</Text>
        <TextInput
          style={styles.input}
          onChangeText={number => this.setState({ number1: parseInt(number) })}
          value={this.state.number1}
          placeholder="Insira o primeiro valor"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={number => this.setState({ number2: parseInt(number) })}
          value={this.state.number2}
          placeholder="Insira o segundo valor"
          keyboardType="numeric"
        />
        <Button
          title="Calcular"
          color="#f194ff"
          onPress={() => {
            this.somar()
          }}
        />
        <Text>{this.state.result > 0 && this.state.result}</Text>

        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})
