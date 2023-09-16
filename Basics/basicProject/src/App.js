/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Card from './components/Card/Card';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Eddard Stark" text="Winter is coming.." />
      <Card title="Arif Işık" text="Uzaylılar tarafından kaçırıldım." />
      <Card title="Tweety" text="Bir kedi gördüm sanki!" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#e0e0e0'},
});

export default App;
