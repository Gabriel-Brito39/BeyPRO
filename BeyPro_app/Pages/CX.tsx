import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import MyComponent from './CardBey';

export default function BeyCX() {
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
        <ScrollView>
            <View style={styles.container}>
                
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
  container: {
    paddingBottom:15,
    flex: 1,
    backgroundColor: '#2a2a40',
    alignItems: 'center',
  }
});