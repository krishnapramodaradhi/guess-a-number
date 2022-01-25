import { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, View, FlatList } from 'react-native';
import ChosenNumberContainer from '../components/ChosenNumberContainer';
import Card from '../components/common/Card';
import MainButton from '../components/common/MainButton';
import TextBold from '../components/common/TextBold';
import TextRegular from '../components/common/TextRegular';

const fetchGuess = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return fetchGuess(min, max, randomNumber);
  }
  return randomNumber;
};

const GuessingGameScreen = ({ selectedNumber, onWin }) => {
  const firstGuess = fetchGuess(1, 100, selectedNumber);
  const [currentGuess, setCurrentGuess] = useState(firstGuess);
  const [rounds, setRounds] = useState([firstGuess.toString()]);

  useEffect(() => {
    if (currentGuess === selectedNumber) {
      onWin();
    }
  }, [currentGuess, selectedNumber, onWin]);

  const minRef = useRef(1);
  const maxRef = useRef(100);

  const handleCurrentGuess = (direction) => {
    if (
      (direction === 'lower' && currentGuess < selectedNumber) ||
      (direction === 'higher' && currentGuess > selectedNumber)
    ) {
      Alert.alert('Invalid hint', 'Please use a valid hint', [
        { text: 'OK!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxRef.current = currentGuess;
    } else {
      minRef.current = currentGuess + 1;
    }

    const nextGuess = fetchGuess(minRef.current, maxRef.current, currentGuess);
    setCurrentGuess(nextGuess);
    setRounds((prevGuess) => [nextGuess, ...prevGuess]);
  };

  const renderGuessLog = (itemData) => {
    return (
      <View style={styles.guessLog}>
        <TextRegular style={styles.text}>
          #{rounds.length - itemData.index}
        </TextRegular>
        <TextRegular style={styles.text}>{itemData.item}</TextRegular>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Card style={styles.guessContainer}>
        <ChosenNumberContainer
          title="Opponent's guess"
          chosenNumber={currentGuess}
        />
        <View style={styles.btnContainer}>
          <MainButton onPress={() => handleCurrentGuess('lower')}>
            Lower
          </MainButton>
          <MainButton onPress={() => handleCurrentGuess('higher')}>
            Higher
          </MainButton>
        </View>
      </Card>
      <Card style={styles.guessLogContainer}>
        <FlatList
          horizontal='none'
          keyExtractor={(item) => item}
          data={rounds}
          renderItem={renderGuessLog}
          contentContainerStyle={styles.guessList}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  guessContainer: {
    marginVertical: 10,
    width: '90%',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  guessLogContainer: {
    width: '90%',
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
  },
  guessList: {
    flexGrow: 1,
  },
  guessLog: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 15,
  },
  text: {
    fontSize: 20,
  },
});

export default GuessingGameScreen;
