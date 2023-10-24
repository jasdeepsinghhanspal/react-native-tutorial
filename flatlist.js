import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  { key: 'Item 1' },
  { key: 'Item 2' },
  { key: 'Item 3' },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.key}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    color: 'blue',
  },
});

export default App;
