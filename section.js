import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const DATA = [
  {
    title: 'Section 1',
    data: ['Item1', 'Item2', 'Item3'],
  },
  {
    title: 'Section 2',
    data: ['Item4', 'Item5', 'Item6'],
  },
  {
    title: 'Section 3',
    data: ['Item7', 'Item8', 'Item9'],
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
  },
});

export default App;
