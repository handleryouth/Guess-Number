import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { ReactNode, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, StyleSheet } from "react-native";

export interface FontWrapperProps {
  children: ReactNode;
}

SplashScreen.preventAutoHideAsync();

export default function FontWrapper({ children }: FontWrapperProps) {
  const [fontsLoaded] = useFonts({
    "open-sans": require("../../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar hidden={!fontsLoaded} />
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
