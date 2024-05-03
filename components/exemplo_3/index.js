import {View, Text, Pressable} from 'react-native';

import styles from './styles';

 function Exemplo_3 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Pressable onPress={() => alert('oi')}style={styles.botao}>
                <Text>Ex. botão</Text>
            </Pressable>
        </View>
    );
}

export default Exemplo_3;