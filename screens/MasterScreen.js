import { StyleSheet, TextInput, View, Text, Pressable, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from './DetailsScreen'


const MasterScreen = ({navigate})  => {

  useEffect(() => {
    fetch('https://leilao-rest-api.herokuapp.com/participante/')
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally();
  }, []);

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [data, setData] = useState([]);
  const Stack = createNativeStackNavigator();

  const onChangeUser = (nome) => {
    setNome(nome)
  }
  const onChangeCpf = (cpf) => {
    setCpf(cpf)
  }
  const sendUser = () => {
    if (nome || cpf) {
      fetch('https://leilao-rest-api.herokuapp.com/participante', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome,
          cpf: cpf,
        }),
      })
        .catch((error) => {
          alert(error);
        })
        .finally();
    }
  }
  return (
        <View style={styles.form}>
          <Text style={styles.titulo}>Registrar Usuário</Text>
          <View>
            <Text style={styles.labels}>Nome:</Text>
            <TextInput style={styles.inputs} onChangeText={onChangeUser}></TextInput>
            <Text style={styles.labels}>Cpf:</Text>
            <TextInput style={styles.inputs} onChangeText={onChangeCpf}></TextInput>
          </View>
          <Pressable
            style={styles.button}
            onPress={sendUser}>
            <Text style={styles.textStyle}>Enviar</Text>
          </Pressable>
          <FlatList
            data={data}
            style={{ margin: 12 }}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.item}>
                  <View
                    style={styles.usersRender}>
                    <Text style={styles.nome}>{item.nome}</Text>
                    <Text>{item.cpf}</Text>
                  </View>
                </View>
              );
            }}
          />
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

export default MasterScreen;
