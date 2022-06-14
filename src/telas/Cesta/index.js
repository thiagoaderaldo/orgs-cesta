import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Detalhes from "./componentes/Detalhes";
import Itens from "./componentes/Itens";

import Topo from "./componentes/Topo";

//const width = Dimensions.get("screen").width;

export default function Cesta({topo, detalhes, itens}) {
  return (
    <ScrollView>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
        <Itens {...itens}/>
      </View>
      </ScrollView>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
