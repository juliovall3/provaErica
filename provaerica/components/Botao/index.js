import * as React from 'react';
import { Text, View, Button } from 'react-native';

import { Card } from 'react-native-paper';

export default function Botao({ texto, funcao, color }) {
  return (
    <View>
      <Button
        title={texto}
        color={color}
        onPress={funcao} 
        />  
    </View>
  );
}
