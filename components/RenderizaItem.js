import { Image, Pressable, Text, View } from "react-native";

const RenderizaItem = (item, navigation) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginVertical: 8,
        borderRadius: 16,
        paddingHorizontal: 38,
        height: 260,
        width: "48%",
      }}
    >
      <Pressable
        onPress={() => {
          navigation.navigate("detail",{item});
        }}
      >
        <Image source={item.image} style={{ width: 100, height: 100 }} resizeMode="contain" />
        <Text style={{ fontSize: 20, marginTop: 10, textAlign: "center" }}>{item.name}</Text>
      </Pressable>
    </View>
  );
};

export default RenderizaItem;
