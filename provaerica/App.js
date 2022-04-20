import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Button from './components/Botao/index';
import BalaoDaSorte from './components/BalaoDaSorte';
import Colors from './components/colors.js';

import { Card } from 'react-native-paper';

export default function App() {
  const [statusBalao, setStatusBalao] = useState(true);

  function estourarBalao() {
    setStatusBalao(false);
  }

  function resetar() {
    setStatusBalao(true);
  }

  return (
    <View style={styles.background}>
      <View style={styles.container1}>
        <View style={styles.img}>
          <BalaoDaSorte balao={statusBalao} />
        </View>
        <View style={styles.botao}>
          <Button
            color={Colors.botao1}
            texto={'Estourar o botão'}
            funcao={estourarBalao}
          />
          <Button
            color={Colors.botao2}
            texto={'Resetar'}
            funcao={resetar}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
  botao: {
    flex: 1,
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
});

