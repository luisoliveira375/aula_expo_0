import { View, Text } from 'react-native';

import styles from './styles';

function Exemplo2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>

            <View style={styles.vimensagem}>
            <Text style={styles.mensagem}>OLa Luis</Text>
            <Text style={styles.mensagem}>OLa Beiço</Text>
        </View>

        </View>
    );
}

export default Exemplo2;