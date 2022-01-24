import AppLoading from 'expo-app-loading';
import { StyleSheet, View } from 'react-native';
import * as Fonts from 'expo-font';
import { useState } from 'react';
import StartGameScreen from './app/screens/StartGameScreen';
import Header from './app/components/Header';

const fetchFonts = () =>
  Fonts.loadAsync({
    urbanist: require('./app/assets/fonts/Urbanist-Regular.ttf'),
    'urbanist-bold': require('./app/assets/fonts/Urbanist-Bold.ttf'),
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header title='Guess a Number' />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});
