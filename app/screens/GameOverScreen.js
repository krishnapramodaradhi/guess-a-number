import { StyleSheet, View, Image } from 'react-native';
import MainButton from '../components/common/MainButton';
import TextBold from '../components/common/TextBold';

const GameOverScreen = ({ resetGame }) => {
  return (
    <View style={styles.container}>
      <TextBold>You have won</TextBold>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: 'https://source.unsplash.com/ufg0Go7rl2k' }}
          style={styles.image}
        />
      </View>
      <MainButton onPress={resetGame}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOverScreen;
