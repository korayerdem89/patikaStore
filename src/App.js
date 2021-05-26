import React from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet, TextInput} from 'react-native';

import Card from './components/Card';
import catalog_data from './catalog_data.json';
const App = () => {
  const catalogData = ({item}) => <Card catalog={item} />;
  return (
    <SafeAreaView> 
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput style={styles.textInput} placeholder='Ara...'/>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.u_id.toString()}
        data={catalog_data}
        renderItem={catalogData}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {color: '#800381', fontSize: 35, fontWeight: 'bold', paddingLeft: 8},
  textInput:{
    backgroundColor:'#eceef0',
    marginHorizontal:5,
    marginBottom:5,
    borderRadius:8,
    marginTop:8,
    fontSize:10,
    height:35,
  }
});

export default App;
