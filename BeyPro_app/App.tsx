import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './Components/AuthStack';
import DrawerNav from './Components/Drawer';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1e1e2f',
    primary: '#00ff62',
    text: '#00d9ff',
    card: '#737373',
    border: '#fff',
  },
};

export default function App() {
  const [logado, setLogado] = useState<boolean | null>(null);

  useEffect(() => {
    const verificarLogin = async () => {
      const usuario = await AsyncStorage.getItem('usuarioLogado');
      setLogado(!!usuario);
    };
    verificarLogin();
  }, []);

  return (
    <NavigationContainer>
      {logado === null ? null : logado ? (
        <DrawerNav setLogado={setLogado} />
      ) : (
        <AuthStack setLogado={setLogado} />
      )}
    </NavigationContainer>
  );
}
