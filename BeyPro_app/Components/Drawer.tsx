import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import BeyCX from '../Pages/CX';
import BeyUX from '../Pages/UX';
import HomeStack from './Stack';

const Drawer = createDrawerNavigator();

export default function DrawerNav({ setLogado }: { setLogado: React.Dispatch<React.SetStateAction<boolean | null>> }) {
  return (
    <Drawer.Navigator
      initialRouteName="BX"
      drawerContent={(props) => <CustomDrawerContent {...props} setLogado={setLogado} />}
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity style={styles.botao} onPress={() => navigation.openDrawer()}>
            <Image source={require('../assets/List.png')} style={styles.image} resizeMode="contain" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row', gap: 15, marginRight: 25 }}>
            <TouchableOpacity style={styles.botao2} onPress={() => console.log('Notificações')}>
              <Image source={require('../assets/Lupa.png')} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao2} onPress={() => console.log('Perfil')}>
              <Image source={require('../assets/Fav1.png')} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          backgroundColor: '#737373',
        },
        headerTintColor: '#fff',
      })}
    >
      <Drawer.Screen name="BX" component={HomeStack} />
      <Drawer.Screen name="CX" component={BeyCX} />
      <Drawer.Screen name="UX" component={BeyUX} />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props: any & { setLogado: React.Dispatch<React.SetStateAction<boolean | null>> }) {
  const navigation = useNavigation<any>();

  const sair = async () => {
    await AsyncStorage.removeItem('usuarioLogado');
    props.setLogado(false); // isso aciona App.tsx a redirecionar para login
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={sair} labelStyle={{ color: 'red', fontWeight: 'bold' }} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: '90%',
  },
  botao: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 50,
    height: 50,
    padding: 5,
    marginRight: 10,
    marginLeft: 15,
  },
  botao2: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 50,
    height: 50,
    padding: 5,
  },
});
