import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const Game = ({ length }) => {
  const [turn, setTurn] = useState('White');
  const [remWhite, setRemWhite] = useState(length);
  const [remBlack, setRemBlack] = useState(length);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (turn === 'White' && remWhite > 0) {
      setTimeout(() => setRemWhite(remWhite - 1), 1000);
    } else if (turn === 'Black' && remBlack > 0) {
      setTimeout(() => setRemBlack(remBlack - 1), 1000);
    } else {
      setGameOver(true);
    }
  }, [turn, remWhite, remBlack]);

  useEffect(() => {
    if (gameOver) {
      alert('Game over', 'Hope you enjoyed');
    }
  }, [gameOver]);

  return (
    <View style={styles.container}>
      <Pressable style={styles.container} onPress={() => setTurn('Black')}>
        <View style={[styles.box, styles.white]}>
          <Text style={[styles.sideText]}>WHITE</Text>
          <Text style={[styles.sideText, styles.timerText]}>{remWhite}</Text>
          <Text style={[styles.sideText, styles.tipText]}> seconds left</Text>
        </View>
      </Pressable>
      <View style={styles.turnBox}>
        <Text style={styles.turnText}>{turn} moves</Text>
      </View>
      <Pressable style={styles.container} onPress={() => setTurn('White')}>
        <View style={[styles.box, styles.black]}>
          <Text style={[styles.sideText]}>BLACK</Text>
          <Text style={[styles.sideText, styles.timerText]}>{remBlack}</Text>
          <Text style={[styles.sideText, styles.tipText]}> seconds left</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
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
    textAlign: 'center',
  },
  timerText: { fontWeight: '700', fontSize: 32 },
  tipText: { fontSize: 18 },
  white: { backgroundColor: 'antiquewhite' },
  black: { backgroundColor: 'darkgray' },
});

export default Game;
