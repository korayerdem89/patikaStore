import React from 'react';

import {View, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box_1} />

      <View style={styles.box_2} />

      <View style={styles.box_3} />

      <View style={styles.box_4} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'cyan',
    justifyContent:'center',
  },
  box_1: {
    backgroundColor: 'blue',
    width: 75,
    height: 75,
  },
  box_2: {
    backgroundColor: 'red',
    width: 75,
    height: 75,
  },
  box_3: {
    backgroundColor: 'purple',
    width: 75,
    height: 75,
  },
  box_4: {
    backgroundColor: 'yellow',
    width: 75,
    height: 75,
  },
});
export default App;
