import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Texto from "../componentes/Texto";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";

import Topo from "./componentes/Topo";

//const width = Dimensions.get("screen").width;

export default function Cesta({ topo, detalhes, itens }) {
return <>
    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({ nome }) => nome }
      ListHeaderComponent={() => {
        return <>
          <Topo {...topo} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
          </View>
        </>
      }}
    />
  </>
}

const estilos = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 5,
    fontSize: 20,
    lineHeight: 32,
  },
});
