import { View, Text, Pressable } from 'react-native';

import styles from './styles';

function Exemplo_3() {
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
        </View>
    );
}

export default Exemplo_3;