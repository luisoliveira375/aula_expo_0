import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

function Exemplo_3() {

    const [numero, setNumero] = useState(0);


    function incremento () {
        setNumero(numero + 1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Pressable
                onPress={() => alert('oi')}
                style={({ pressed }) => pressed ?
                [styles.botao, styles.botaoPress]
                :
                styles.botao}
            >
                <Text style={styles.txtBotao}>Ex. botao</Text>
            </Pressable>

            <text style={styles.titulo}>Exemplo State</text> 

            <Text styles={styles.txtNumero}>{numero}</Text>

            <Pressable
                onPress={() => incremento ()}
                style={({ pressed }) => pressed ?
                [styles.botao, styles.botaoPress]
                :
                styles.botao}
            >
                <Text style={styles.txtBotao}>+1</Text>
            </Pressable>
        </View>
    );
}

export default Exemplo_3;