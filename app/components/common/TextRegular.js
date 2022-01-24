import { StyleSheet, Text } from 'react-native';

const TextRegular = ({ children, style }) => (
  <Text style={{ ...styles.textRegular, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  textRegular: {
    fontFamily: 'urbanist',
  },
});

export default TextRegular;
