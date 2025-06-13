import React, {useState} from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import { BeyX } from './Beys';

type Props = {
  bey: BeyX;
};

import {useNavigation} from '@react-navigation/native';

export default function MyComponent({ bey }: Props) {
  const [clicado, setClicado] = useState(false);
  const favorito2 = require('../assets/Fav2.png'); // imagem inicial
  const favorito1 = require('../assets/Fav1.png'); // imagem ao clicar
  const navigation = useNavigation();


  const telaINF = () => {
    navigation.navigate('Status');
  }
  return (
    <TouchableOpacity style={styles.card} onPress={telaINF}>
      <View style={styles.containerbey1}>
        <View style={styles.containerbey3}>
          <View style={styles.containerbey5}> 
            <Text style={styles.text}>{bey.NumeroSerie}</Text>
          </View>
          <View style={styles.containerbey6}> 
            <Image source={{ uri: bey.Tipo }} style={styles.image}/>
          </View>
          <View>
            <TouchableOpacity style={styles.botao2} onPress={() => setClicado(!clicado)}>
              <Image id='Bey1' source={clicado ? favorito1 : favorito2} style={styles.image} resizeMode="contain"/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerbey4}>
          <Text style={styles.textBey}>{bey.Blade} {bey.Ratchet}{bey.Bit}</Text>
        </View>
      </View>
      <View style={styles.containerbey2}>
        <Image source={{ uri: bey.img }}style={{ width:'100%',height:'100%',borderBottomLeftRadius: 50,borderTopLeftRadius: 50,borderBottomRightRadius: 15,borderTopRightRadius: 15,}}/>
      </View>
    </TouchableOpacity>
 );
}

const styles = StyleSheet.create({
  image: {
    width:'90%',
    height:'90%',
  },
  botao2: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 50,
    width: 50,
    padding: 5,
  },
  card: {
    marginTop: 15,
    width: '90%',
    height: 150,
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: '#737373',
  },
  containerbey1:{
    flex: 2,
    height:'100%',
  },
  containerbey3:{
    flex: 1,
    marginInline:15,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  containerbey4:{
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    borderBottomLeftRadius: 15,
  },
  containerbey5:{
    marginInline:10,
    height: 45,
    backgroundColor:'#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 5,
  },
  containerbey6:{
    marginInline:8,
    height: 50,
    width: 50,
    backgroundColor:'#ffffff',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 30,
    padding: 5,
  },
  containerbey2:{
    flex: 1,
    height:'100%',
  },
  text: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
  },
  textBey: {
    flex: 1,
    marginInline:10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    fontSize: 23,
    textAlign: 'center',
  },
});