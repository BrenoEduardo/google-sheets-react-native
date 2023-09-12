import { FlatList } from "react-native";
import RenderizaItem from "./RenderizaItem";
import { DATA } from "../data/dados";
import { useNavigation } from "@react-navigation/native";

const ListaProdutos = () => {
  const navigation = useNavigation();

  return <FlatList numColumns={2} data={DATA} columnWrapperStyle={{ justifyContent: "space-between" }}
    renderItem={({ item } ) => RenderizaItem(item, navigation)} />;
};

export default ListaProdutos;
