import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from './constants/Colors';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.light.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
