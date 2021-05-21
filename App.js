import React from 'react';

import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native';

const App = () => {
  function sayHello() {
    console.log('merhabalar');
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Text>Hello World 31</Text>
      </View>
      
      <Button title="Here Press Me!" onPress={sayHello} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
  },
});
export default App;
