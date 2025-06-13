import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from '../Pages/TelaLogin';
import TelaCadastro from '../Pages/TelaCadastro';

const Stack = createNativeStackNavigator();

export default function AuthStack({ setLogado }: { setLogado: React.Dispatch<React.SetStateAction<boolean | null>> }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {props => <TelaLogin {...props} setLogado={setLogado} />}
      </Stack.Screen>
      <Stack.Screen name="Cadastro" component={TelaCadastro} />
    </Stack.Navigator>
  );
}

