import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import ShopCard from './components/ShopCard';
import shop_data from './shop_data.json';

function App() {
  const renderNews = ({item}) => <ShopCard items={item} />;
  const numColumns = 2;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>PATIKASTORE</Text>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={shop_data}
        numColumns={numColumns}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'purple',
  },
});

export default App;
