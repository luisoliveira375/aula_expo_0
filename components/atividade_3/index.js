import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

function atividade_3() {

    const [numero, setNumero] = useState(0);


    function incremento () {
        setNumero(numero + 1);
    }

    function menos () {
        setNumero(numero - 1);
    }

    function zero () {
        setNumero(numero - numero);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>atividade_3</Text>
          
            <Text style={styles.txtNumero}>{numero}</Text>

            <Pressable
                onPress={() => incremento ()}
                style={({ pressed }) => pressed ?
                [styles.botao, styles.botaoPress]
                :
                styles.botao}
            >
                <Text style={styles.txtBotao}>+1</Text>
            </Pressable>

            <Pressable
                onPress={() => menos ()}
                style={({ pressed }) => pressed ?
                [styles.botao, styles.botaoPress]
                :
                styles.botao}
            >
                <Text style={styles.txtBotao}>-1</Text>
            </Pressable>

            <Pressable
                onPress={() => zero ()}
                style={({ pressed }) => pressed ?
                [styles.botao, styles.botaoPress]
                :
                styles.botao}
            >
                <Text style={styles.txtBotao}>zerar</Text>
            </Pressable>
        </View>
    );
}

export default atividade_3;