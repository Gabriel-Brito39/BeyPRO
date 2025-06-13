import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { beysX } from './Beys';
import MyComponent from './CardBey';


export default function Home() {
  return (
    <SafeAreaProvider>
      <MainContent />
    </SafeAreaProvider>
  );
}

function MainContent() {

  const insets = useSafeAreaInsets();
  
  return (
    <View style={[styles.safeArea, {paddingTop: insets.top + 1,paddingBottom: 15,}]}>
      <FlatList
        data={beysX}
        keyExtractor={(item) => item.Id.toString()}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => <MyComponent bey={item} />}
      />
      <View style={{height:30,}}></View>  
    </View>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    paddingBottom:15,
    flex: 1,
    backgroundColor: '#2a2a40',
    alignItems: 'center',
  }
});