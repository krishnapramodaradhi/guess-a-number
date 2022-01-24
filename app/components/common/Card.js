import { StyleSheet, View } from 'react-native';
import colors from '../../constants/colors';

const Card = ({ children, style }) => (
  <View style={{ ...styles.card, ...style }}>{children}</View>
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Card;
