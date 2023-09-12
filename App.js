import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MasterScreen from "./screens/MasterScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { useState } from "react";
import { getProduct } from "./data/dados";
import BagItens from './screens/BagItens';

const Stack = createNativeStackNavigator();

export default function App() {
  const [itensCarrinho, setItensCarrinho] = useState([]);

  const addItemToCart = (id) => {
    const product = getProduct(id);
    console.log(product.name)
    setItensCarrinho((prevItems) => {
      const item = prevItems.find((item) => item.id == id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
          }
          return item;
        });
      }
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="master" component={MasterScreen} options={{ title: "Compre Certo" }}></Stack.Screen>
        <Stack.Screen name="detail" options={{ title: "Compre Certo" }}>
          {(props) => <DetailsScreen {...props} add={addItemToCart} />}
        </Stack.Screen>
        <Stack.Screen name="bag" options={{ title: "Compre Certo" }}>
          {(props) => <BagItens {...props} itens={itensCarrinho} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
