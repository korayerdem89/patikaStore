import React from 'react';

import {View, Text, SafeAreaView, Button} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
      </View>
      <Text>Hello World 31</Text>
      <Button
        title="Here Press Me!"
        onPress={() => {
          console.log('merhaba');
        }}
      />
    </SafeAreaView>
  );
};

export default App;
