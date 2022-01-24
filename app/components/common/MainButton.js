import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../../constants/colors';
import TextRegular from './TextRegular';

const MainButton = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View style={{ ...styles.button, ...style }}>
        <TextRegular style={styles.btnText}>{children}</TextRegular>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.accent,
    borderRadius: 30,
  },
  btnText: {
    fontSize: 18,
    color: colors.white,
  },
});

export default MainButton;
