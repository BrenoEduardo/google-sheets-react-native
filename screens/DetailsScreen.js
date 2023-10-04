import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";

const DetailsScreen = () => {


  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(0);
  const [id, setId] = useState('');
  const [valorLance, setValorLance] = useState(0);
  const [teste2, teste] = useState([]);




  const onChangeNome = (nome) => {
    setNome(nome);
  }
  const onChangeValor = (valor) => {
    setValor(valor);
  }
  const sendLeilao = () => {
    if (nome || valor) {
      fetch('https://leilao-rest-api.herokuapp.com/itemdeleilao/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome,
          valorMinimo: valor,
          leilaoAberto: true,
        }),
      })
        .then((response) => {
          setNome('');
          setValor(0);
        })
        .catch((error) => {
          alert(error);
        })
        .finally(() => {

        });
    }
  }
  const onChangeId = (id)=>{
    setId(id)
  }
  const serachLeilao = ()=>{
    fetch(`https://leilao-rest-api.herokuapp.com/itemdeleilao/${id}`)
    .then((resp) => resp.json())
    .then((json) => {
      if(json.leilaoAberto){
        fetch(`https://leilao-rest-api.herokuapp.com/lance/${id}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            valor: valorLance,
            arrematante:{
              id:id,
              nome:json.nome,
              cpf:json.cpf
            }
          }),
        })
          .catch((error) => {
            alert(error);
          })
          .finally();
      }
      teste(json)
    })
    .catch((error) => console.error(error))
    .finally();
  }
  const onChangeValorLance = (valor)=>{
    setValorLance(valor)
  }
  return (
    <View style={styles.form}>
      <Text style={styles.titulo}>Registrar Leilão</Text>
      <View>
        <Text style={styles.labels}>Nome do Item:</Text>
        <TextInput style={styles.inputs} onChangeText={onChangeNome}></TextInput>
        <Text style={styles.labels}>Valor mínimo do Item:</Text>
        <TextInput style={styles.inputs} onChangeText={onChangeValor}></TextInput>
      </View>
      <Pressable
        style={styles.button}
        onPress={sendLeilao}
      >
        <Text style={styles.textStyle}>Registrar leilão</Text>
      </Pressable>
      <View style={styles.form}>
        <Text style={styles.titulo}>Buscar Leilão</Text>
        <View>
          <Text style={styles.labels}>Id do Item:</Text>
          <TextInput style={styles.inputs} onChangeText={onChangeId}></TextInput>
          <Text style={styles.labels}>Valor do lance:</Text>
          <TextInput style={styles.inputs} keyboardType="numeric" onChangeText={onChangeValorLance}></TextInput>
        </View>
        <Pressable
          style={styles.button}
          onPress={sendLeilao}
        >
          <Text style={styles.textStyle} onPress={serachLeilao}>Enviar lance</Text>
        </Pressable> 
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20
  },
  inputs: {
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    margin: 5
  },
  labels: {
    marginLeft: 5
  },
  button: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: 150,
    padding: 5,
    margin: 10
  },
  item: {
    margin: 5
  },

  usersRender: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-around',
    borderWidth: 1,
    padding: 5,

  }
});

export default DetailsScreen;
