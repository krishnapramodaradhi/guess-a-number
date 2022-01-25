import AppLoading from 'expo-app-loading';
import { StyleSheet, View } from 'react-native';
import * as Fonts from 'expo-font';
import { useState } from 'react';
import StartGameScreen from './app/screens/StartGameScreen';
import Header from './app/components/Header';
import GuessingGameScreen from './app/screens/GuessingGameScreen';
import GameOverScreen from './app/screens/GameOverScreen';

const fetchFonts = () =>
  Fonts.loadAsync({
    urbanist: require('./app/assets/fonts/Urbanist-Regular.ttf'),
    'urbanist-bold': require('./app/assets/fonts/Urbanist-Bold.ttf'),
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [hasWon, setHasWon] = useState(false);

  const handleNewGame = () => {
    setSelectedNumber(null);
    setHasWon(false);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  let content = (
    <StartGameScreen
      setSelectedNumber={(selectedNumber) => setSelectedNumber(selectedNumber)}
    />
  );
  if (selectedNumber) {
    content = (
      <GuessingGameScreen
        selectedNumber={selectedNumber}
        onWin={() => setHasWon(true)}
      />
    );
  }

  if (hasWon) {
    content = <GameOverScreen resetGame={handleNewGame} />;
  }
  return (
    <View style={styles.container}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});
