import React, { useCallback } from "react";
import { StatusBar, SafeAreaView } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Cesta from "./src/telas/Cesta";
import mock from "./src/mocks/cesta";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fonteCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fonteCarregada]);

  if (!fonteCarregada) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
