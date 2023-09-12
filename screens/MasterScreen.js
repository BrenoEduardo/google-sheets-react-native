import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import Topo from "../components/Topo";
import ListaProdutos from "../components/ListaProdutos";

const MasterScreen = () => {
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <Topo />
      <ListaProdutos />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingHorizontal: 12,
    paddingTop: 30,
  },
});

export default MasterScreen;
