import { Fragment } from 'react';
import { StyleSheet } from 'react-native';

import colors from '../constants/colors';
import TextBold from './common/TextBold';

const ChosenNumberContainer = ({ title, chosenNumber }) => {
  return (
    <Fragment>
      <TextBold style={styles.chosenNumberTitle}>{title}</TextBold>
      <TextBold style={styles.chosenNumber}>{chosenNumber}</TextBold>
    </Fragment>
  );
};

const styles = StyleSheet.create({
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

export default ChosenNumberContainer;
