import React from 'react';
import {SafeAreaView, FlatList, ScrollView} from 'react-native';
import Card from './components/Card';
import catalog_data from './catalog_data.json';
const App = () => {
  const catalogData = ({item}) => <Card catalog={item} />;
  return (
    <SafeAreaView>
        <FlatList 
        numColumns={2}
        keyExtractor={item => item.u_id.toString()}
        data={catalog_data}
        renderItem={catalogData}
        />
    </SafeAreaView>
  );
};

export default App;
