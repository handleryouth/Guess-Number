import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "@src/color";
import { NumberContainerProps } from "@src/types";

export default function NumberContainer({ children }: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.accent500,
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: COLORS.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
