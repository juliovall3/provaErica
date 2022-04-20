import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import sizes from '../sizes.js';

export default function BalaoDaSorte({balao}) {
  const frasesMotivacionais = [
    '“O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo    fará coisas admiráveis.”',
    '“Só existe um êxito: a capacidade de levar a vida que se quer.”',
    '“A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.”',
    '“A coragem não é ausência do medo; é a persistência apesar do medo.”',
    '“Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.”',
    '"O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível."',
  ];

  function Numaleatorio() {
    return Math.round(Math.random() * (5 - 0) + 0);
  }
  
  return (
    <View style={styles.container}>
      {balao ? (
        <Image
          style={{ width: 150, height: 250 }}
          source={require('../../assets/balloon_red.jpg')}
        />
      ) : (
        <View
          style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}>
          <Image
            style={{ width: 150, height: 250 }}
            source={require('../../assets/popped_balloon_red.jpg')}
          />

          <Text style={{ fontSize: sizes.m }}>
            {frasesMotivacionais[Numaleatorio()]}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
