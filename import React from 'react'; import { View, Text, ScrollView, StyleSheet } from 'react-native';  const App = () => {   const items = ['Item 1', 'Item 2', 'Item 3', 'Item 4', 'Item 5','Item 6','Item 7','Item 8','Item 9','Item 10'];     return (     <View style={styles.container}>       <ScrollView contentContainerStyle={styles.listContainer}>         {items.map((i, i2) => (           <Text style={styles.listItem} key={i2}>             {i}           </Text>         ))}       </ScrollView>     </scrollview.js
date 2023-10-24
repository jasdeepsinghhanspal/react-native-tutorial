import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 6','Item 7','Item 8','Item 9','Item 10']; 

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {items.map((i, i2) => (
          <Text style={styles.listItem} key={i2}>
            {i}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 30,
  },
  listItem: {
    margin:30,
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
});

export default App;
