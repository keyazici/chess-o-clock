import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const Game = ({ length }) => {
  const [turn, setTurn] = useState('White');
  const [remWhite, setRemWhite] = useState(length);
  const [remBlack, setRemBlack] = useState(length);

  useEffect(() => {
    turn === 'White'
      ? remWhite > 0 && setTimeout(() => setRemWhite(remWhite - 1), 1000)
      : remBlack > 0 && setTimeout(() => setRemBlack(remBlack - 1), 1000);
  }, [turn, remWhite, remBlack]);

  return (
    <View style={styles.container}>
      <Pressable style={styles.container} onPress={() => setTurn('Black')}>
        <View style={[styles.box, styles.white]}>
          <Text style={[styles.sideText]}>
            WHITE {'\n'} {remWhite}
          </Text>
        </View>
      </Pressable>
      <View style={styles.turnBox}>
        <Text style={styles.turnText}>{turn} moves</Text>
      </View>
      <Pressable style={styles.container} onPress={() => setTurn('White')}>
        <View style={[styles.box, styles.black]}>
          <Text style={[styles.sideText]}>
            BLACK {'\n'} {remBlack}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  turnBox: {
    flex: 0.2,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
  },
  turnText: {
    fontFamily: 'monospace',
    fontStyle: 'italic',
    fontSize: 22,
  },
  sideText: {
    fontFamily: 'monospace',
    fontSize: 24,
    fontWeight: 'bold',
  },
  white: {
    backgroundColor: 'antiquewhite',
  },
  black: {
    backgroundColor: 'darkgray',
  },
});

export default Game;
