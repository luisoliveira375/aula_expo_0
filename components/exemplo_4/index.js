import { View, Text, TexInput } from 'react-native';

import styles from './styles';

export default function Exemplo_4 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>  Exemplo_4</Text>

            <TexInput placeholde='digite seu nome...'
            style={styles.input}
            />
            <Text style={styles.texto}>Nome digitado: </Text>
        </View>
    );
}