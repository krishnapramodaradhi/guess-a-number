import { StyleSheet, Text } from 'react-native';

const TextBold = ({ children, style }) => (
  <Text style={{ ...styles.textBold, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  textBold: {
    fontFamily: 'urbanist-bold',
  },
});

export default TextBold;
