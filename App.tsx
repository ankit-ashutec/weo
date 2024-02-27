import React from 'react';
import {Routes} from './src/setup/routes/index';
import {SafeAreaView, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
};

export default App;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
