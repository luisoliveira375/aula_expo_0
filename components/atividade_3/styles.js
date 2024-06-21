import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#abd5ff',
        borderRadius:20,
        width:'100%',
        alignItems:'center',
    },
    
    container2:{
        display: 'flex',
        flexDirection: 'row',
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        marginVertical:20,
        color: '#310f4d',
        
    },

    botao:{
        borderWidth: 3,
        padding:10,
        width:'50%',
        borderRadius:20,
        alignItems:'center',
        borderColor: '#310f4d',
        margin: 10,
    },

    txtbotao:{
        fontSize: 25,
        color: 'blue',
    },

    botaopress:{
        backgroundColor: 'cyan'
    },

    txtpress:{
        fontSize:25,
        color: '#abd5ff'
    },

    txtNumero:{
        fontSize: 25,
        color: '#733ba1',
        marginVertical: 10,
    },
});

export default styles;