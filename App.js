import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { RestaurantsScreen } from "./src/components/features/restaurents/screens/restaurents.screens";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
export default function App() {
  const [oswaldLoad] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoad] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoad || !latoLoad) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
