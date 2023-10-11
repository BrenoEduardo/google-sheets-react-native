import { StyleSheet, Text, View, TextInput, Pressable, FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const DetailsScreen = ({ navigation }) => {


  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    getLeilao();
  }, []);


  const onChangeNome = (nome) => {
    setNome(nome);
  }
  const onChangeValor = (valor) => {
    setValor(valor);
  }
  const getLeilao = () => {
    fetch('https://leilao-rest-api.herokuapp.com/itemdeleilao/')
      .then((resp) => resp.json())
      .then((json) => {
        setData((json))
      })
      .catch((error) => console.error(error))
      .finally();
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
          getLeilao();
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
  const deleteLeilao = (id) => {
    fetch(`https://leilao-rest-api.herokuapp.com/itemdeleilao/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // getLeilao();

      })
  }
  const screenSearchLeilao = () => {
    navigation.navigate('BagItens')
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
      <Pressable
        style={styles.button}
        onPress={screenSearchLeilao}
      >
        <Text style={styles.textStyle}>Buscar leilão</Text>
      </Pressable>
      <FlatList
        data={data}
        style={{ margin: 12 }}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <View
                style={styles.usersRender}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text>{item.valorMinimo}</Text>
                <Pressable
                  onPress={deleteLeilao(item.id)}

                >
                  <MaterialCommunityIcons
                    name="close"
                    color={'red'}
                  />
                </Pressable >

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
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    borderWidth: 1,
    padding: 5,

  }
});

export default DetailsScreen;
