import {
  Montserrat_400Regular,
  Montserrat_700Bold, useFonts
} from "@expo-google-fonts/montserrat";
import { SafeAreaView, StatusBar } from "react-native";
import Cesta from "./src/telas/Cesta";

import AppLoading from "expo-app-loading";
import mocks from "./src/mocks/cesta";

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontsserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  if(!fonteCarregada){
    return <AppLoading />    
  }

  return (
    <SafeAreaView style={ {flex: 1}}>
      <StatusBar />
      <Cesta {...mocks} />
    </SafeAreaView>
  );
}
