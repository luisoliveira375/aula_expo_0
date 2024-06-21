import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2f00ff',
        borderRadius: 20,
        width:'100%',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold', 
        marginVertical: 20,
        color: '#00e1ff'
    },
    texto: {
        fontSize: 25,
        color: '000000',
        width: '80%',
    },

    Input: {
        fontSize: 25,
        color: '#000000',
        width: '80',
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '000000',
        padding: 5,
        borderRadius: 20,
    }

});

export default styles;