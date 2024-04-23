import { View, Text } from 'react-native'


import styles from './styles';

export default function Mensagem () {
    return(
        <View style={styles.viewmensagem}>
            <Text style={styles.menasgem}>{`${nome} ${sobrenome}`}</Text>

        </View>
    );
}

