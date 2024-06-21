import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

function Atividade_3() {

   const [numero, setNumero] = useState(0);

    function adicao (){
        setNumero(numero +1);
    }
    function subtracao (){
        setNumero(numero -1);
    }
    function zerar (){
        setNumero(numero - numero);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Atividade 3</Text>

            <View style={styles.container2}>
            <Pressable
                onPress={() => adicao() }
                style={ ({ pressed} ) => pressed ?

                [styles.botao , styles.botaopress]
                :
                styles.botao}
            >
                <Text style={styles.txtbotao}> +1 </Text>
                
            </Pressable>

            <Text style={styles.txtNumero}>{numero}</Text>
            
            <Pressable
                onPress={() => subtracao() }
                 style={ ({ pressed} ) => pressed ?

               [styles.botao , styles.botaopress]
               :
                styles.botao}
                >
            <Text style={styles.txtbotao}> -1 </Text>
    
            </Pressable>

            </View>

            <Pressable
                onPress={() => zerar() }
                 style={ ({ pressed} ) => pressed ?

               [styles.botao , styles.botaopress]
               :
                styles.botao}
                >
            <Text style={styles.txtbotao}> zerar </Text>
    
            </Pressable>
        </View>
        
    );
}

export default Atividade_3;