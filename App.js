import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView } from "react-native";
import MasterScreen from './screens/MasterScreen'
import DetailsScreen from './screens/DetailsScreen'
import BagItens from './screens/BagItens'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // <ScrollView >
    //   <View style={styles.container}>
    //     <MasterScreen></MasterScreen>
    //     <DetailsScreen></DetailsScreen>
    //   </View>
    // </ScrollView>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="MasterScreen" component={MasterScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="BagItens" component={BagItens} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#ccc",
    paddingHorizontal: 12,
    paddingTop: 30,
    paddingBottom: 500,
  },
});
