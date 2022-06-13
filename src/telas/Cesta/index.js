import React from "react";
import { StyleSheet, View } from "react-native";
import Detalhes from "./componentes/Detalhes";

import Topo from "./componentes/Topo";

//const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <Topo />
      <View style={estilos.cesta}>
        <Detalhes />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
