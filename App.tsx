import React from 'react';
import {Providers} from './src/setup/providers/index';
import {SafeAreaView, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Providers />
    </SafeAreaView>
  );
};

export default App;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
