import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d6eeff',
        borderRadius: 20,
        width:'100%',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold', 
        marginVertical: 20,
        color: '#673AB7'
    },
    botao: {
        borderWidth: 3,
        padding:10,
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#673AB7',
    },
    txtBotao: {
        fontSize: 25,
        color: '#673AB7',
    },
    botaoPress: {
        backgroundColor: 'blue',
    },

});

export default styles;



