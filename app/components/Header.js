import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import colors from '../constants/colors';
import TextBold from './common/TextBold';

const Header = ({ title }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextBold style={styles.title}>{title}</TextBold>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 80,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 22,
    color: colors.white,
  },
});

export default Header;
