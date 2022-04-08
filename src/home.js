import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Home = () => {
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [descricao, setDescricao] = useState('');

    const notificar = () => {
        if(cidade == '' || bairro == '' || rua == '' || numero == '') {
          console.log('Dados invalidos!')
        } else {
            console.log("OK")
        }
      }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Informe a Cidade</Text>
            <TextInput
                style={styles.input}
                onChangeText={setCidade}
                value={cidade}
            />
            <Text style={styles.text}>Informe o Bairro</Text>
            <TextInput
                style={styles.input}
                onChangeText={setBairro}
                value={bairro}
            />
            <Text style={styles.text}>Informe a Rua</Text>
            <TextInput
                style={styles.input}
                onChangeText={setRua}
                value={rua}
            />
            <Text style={styles.text}>Informe o Número</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNumero}
                value={numero}
            />
            <Text style={styles.text}>Descrição</Text>
            <TextInput
                style={styles.inputDescription}
                onChangeText={setDescricao}
                value={descricao}
            />
            <View style={styles.botao}>
            <Button 
                title="Notificar" 
                onPress={notificar()} 
            />
            </View>                
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 100
    },
    text: {
        paddingLeft: 20,
        fontSize: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 30,
        borderRadius: 5
    },
    inputDescription: {
        height: 120,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 30,
        borderRadius: 5
    },
    botao: {
        width: "100%",
        alignItems: "center",
    }
});



export default Home;