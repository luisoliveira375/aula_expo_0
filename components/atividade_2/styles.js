import { StyleSheet } from 'react-native';
import atividade_2 from '.';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        flex: 1,
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 8,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    mensagem: {
        fontSize: 25,
        margin: 10,
        color: 'orange',
    },
    viewmensagem: {
        borderwidth: 2,
        borderColor: 'orange',
        borderRadius: 20,
    },
    
});

export default styles;