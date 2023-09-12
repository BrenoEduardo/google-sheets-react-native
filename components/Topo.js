import { Image, Text, View } from "react-native";
const Topo = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <Text style={{ fontSize: 30, fontFamily: "OpenSans-Bold" }}>Lighteria</Text>
        <View style={{ backgroundColor: "#fff", padding: 16, borderRadius: 30 }}>
          <Image source={require("../assets/images/icone-sacola.png")} style={{ width: 30, height: 30 }} />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
        <View style={{ borderBottomWidth: 1, flexGrow: 1 }} />
        <Text style={{ position: "absolute", paddingHorizontal: 20, backgroundColor: "#ccc", fontSize: 16 }}>Categorias</Text>
      </View>
    </View>
  );
};
export default Topo;
