import React, { useState } from 'react';
import { View, Text, FlatList, RefreshControl} from 'react-native';

const App = () => {
  const [data, setData] = useState([
    { text: 'Item1' },
    { text: 'Item2' },
    { text: 'Item3' },
    { text: 'Item4' },
    { text: 'Item5' },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const keyExtractor = (item, index) => index.toString();

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      const newItem = { text: `Item${data.length + 1}` };
      setData([...data, newItem]);
      setRefreshing(false);
    }, 1000); 
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    />
  );
};

export default App;
