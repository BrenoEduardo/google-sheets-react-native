import { StyleSheet, Text, View, Image, Button } from "react-native";

const DetailsScreen = ({ route, add }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", marginVertical: 40 }}>
      <Text style={{ fontSize: 30 }}>{item.name}</Text>
      <Image source={item.image} style={{ height:'50%', marginBottom:20 }} resizeMode="contain" />
      <Button title="comprar" onPress={()=>add(item.id)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailsScreen;
