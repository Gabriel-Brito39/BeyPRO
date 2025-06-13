import React from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native';

export default function BeyStatus() {
  const navigation = useNavigation();
  const telaHome = () => {
    navigation.navigate('BX');
  }
  
  return (
    <SafeAreaProvider>
      <MainContent />
    </SafeAreaProvider>
  );
}

function MainContent() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.safeArea, {width:'100%',paddingTop: insets.top + 1,paddingBottom: 15,}]}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={styles.container}>
          <View style={styles.containerimg}>
            <Image source={{uri: 'https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX01_02_list.png'}}style={styles.image} resizeMode="contain"/>
          </View>

          <View>
            <Text>akjkfbd
            </Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.containerimg}>
            <Image source={{uri:'https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX01_03_list.png'}}style={styles.image} resizeMode="contain"/>
          </View>

          <View>
            <Text>fkflksf
            </Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.containerimg}>
            <Image source={{uri:'https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX01_04_list.png'}}style={styles.image} resizeMode="contain"/>
          </View>

          <View>
            <Text>djfdsfosf
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{height:30,}}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width:'100%',
    height:'100%',
  },
  containerimg: {
    height:'90%',
    width:'90%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffff',
    height:600,
    width:300,
  }
});