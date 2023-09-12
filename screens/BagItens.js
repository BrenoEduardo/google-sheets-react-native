import { FlatList, StyleSheet, Text, View } from "react-native";

const BagItens = ({ itens }) => {
  return (
    <View>
      <FlatList data={itens} renderItem={({ item }) => <Text>{item.name}</Text>} />
    </View>
  );
};
export default BagItens;
const styles = StyleSheet.create({});
