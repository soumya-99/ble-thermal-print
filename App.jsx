import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Printer from './Printer';

const App = () => {
  return (
    <View style={styles.container}>
      <Printer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
