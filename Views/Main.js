import React, {useRef} from 'react';
import {Animated, View, StyleSheet, PanResponder, Text, Dimensions} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
});

export default App;