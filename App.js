import React, { useState } from 'react';
import Game from './Game';
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [start, setStart] = useState(false);
  const [length, setLength] = useState(300);

  const Settings = () => (
    <View style={styles.container}>
      <View style={styles.timerBox}>
        <Text style={styles.text}>Game Length: </Text>
        <TextInput
          style={styles.text}
          onChangeText={text => setLength(text)}
          keyboardType="numeric"
          placeholder="300"
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => setStart(!start)}>
        <Text>{length}</Text>
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
    </View>
  );

  return start ? <Game length={length} /> : <Settings />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'antiquewhite',
  },
  timerBox: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btn: {
    flex: 0.3,
    backgroundColor: 'gray',
    height: 100,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'monospace',
    fontSize: 28,
    fontWeight: '600',
  },
});
export default App;
