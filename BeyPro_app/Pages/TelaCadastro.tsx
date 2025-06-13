import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function TelaCadastro() {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<any>();

  const cadastrar = async () => {
    try {
      await axios.post('http://192.168.0.13:8080/usuarios', {
        username,
        senha,
      });
      alert('Usuário cadastrado!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar usuário');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput placeholder="Usuário" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry style={styles.input} />
      <Button title="Cadastrar" onPress={cadastrar} />
      <Button title="Voltar ao Login" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5, backgroundColor: '#fff' },
  title: { fontSize: 24, marginBottom: 20, color: '#00ff62', textAlign: 'center' },
});
