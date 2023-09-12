import { FlatList, StyleSheet, Text, View } from "react-native";

const BagItens = ({ itens }) => {
  console.log(itens.length)
  return (
    <View>
      <FlatList data={itens} renderItem={({ item }) => <Text>*{item.product.name}</Text>} />
    </View>
  );
};
export default BagItens;
const styles = StyleSheet.create({});
