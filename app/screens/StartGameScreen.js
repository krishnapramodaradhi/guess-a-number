import { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import Card from '../components/common/Card';
import MainButton from '../components/common/MainButton';
import TextBold from '../components/common/TextBold';
import TextRegular from '../components/common/TextRegular';
import colors from '../constants/colors';

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const [chosenNumber, setChosenNumber] = useState('');

  const handleChosenNumber = () => {
    const selectedNumber = parseInt(enteredNumber);
    if (isNaN(selectedNumber) || selectedNumber <= 0) {
      Alert.alert('Invalid Value', 'Please enter a valid Value');
      return;
    }

    setChosenNumber(selectedNumber);
    setEnteredNumber('');
  };

  const handleResetInput = () => {
    setEnteredNumber('');
    setChosenNumber('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (chosenNumber) {
    confirmedOutput = (
      <Card style={styles.chosenNumberContainer}>
        <TextRegular style={styles.chosenNumberTitle}>
          Chosen Number
        </TextRegular>
        <TextBold style={styles.chosenNumber}>{chosenNumber}</TextBold>
        <MainButton>Start Game</MainButton>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextRegular style={styles.title}>Start a new game!</TextRegular>
        <Card style={styles.inputContainer}>
          <TextRegular>Choose a number</TextRegular>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType='number-pad'
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={(number) =>
              setEnteredNumber(number.replace(/[^0-9]/g, ''))
            }
          />
          <View style={styles.btnContainer}>
            <Button
              title='Reset'
              color={colors.accent}
              onPress={handleResetInput}
            />
            <Button
              title='Confirm'
              color={colors.primary}
              onPress={handleChosenNumber}
            />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
  },
  inputContainer: {
    width: '90%',
    maxWidth: '90%',
    marginVertical: 10,
  },
  input: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    padding: 5,
    height: 30,
    width: 50,
    textAlign: 'center',
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  chosenNumberContainer: {
    width: '90%',
  },
  chosenNumberTitle: {
    fontSize: 18,
  },
  chosenNumber: {
    fontSize: 60,
    marginVertical: 5,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.33,
    color: colors.primary,
  },
});

export default StartGameScreen;
