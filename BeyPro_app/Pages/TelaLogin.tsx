import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TelaLoginProps = {
  navigation: NativeStackNavigationProp<any>;
  setLogado: React.Dispatch<React.SetStateAction<boolean | null>>;
};


const TelaLogin: React.FC<TelaLoginProps> = ({ navigation, setLogado }) => {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  const logar = async () => {
    try {
      const res = await axios.get('http://192.168.0.13:8080/usuarios');
      const usuario = res.data.find(
        (u: any) => u.username === username && u.senha === senha
      );

      if (usuario) {
        await AsyncStorage.setItem('usuarioLogado', usuario.id.toString());
        setLogado(true); // isso fará App.tsx redirecionar para o DrawerNav
      } else {
        alert('Usuário ou senha inválidos');
      }
    } catch (err) {
      console.error('Erro no login:', err);
      alert('Erro ao conectar com o servidor');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <TextInput
        placeholder="Usuário"
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
      />
      <Button title="Entrar" onPress={logar} />
      <Button title="Cadastrar-se" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default TelaLogin;
