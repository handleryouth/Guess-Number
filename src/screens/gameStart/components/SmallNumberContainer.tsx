import { PrimaryButton } from "@src/components";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "@src/color";

export interface SmallNumberContainerProps {
  guessedNumber: number;
  onPlus: () => void;
  onMinus: () => void;
}

export default function SmallNumberContainer({
  guessedNumber,
  onPlus,
  onMinus,
}: SmallNumberContainerProps) {
  return (
    <View style={styles.container}>
      <PrimaryButton onPress={onMinus} style={styles.button}>
        <FontAwesome name="minus" />
      </PrimaryButton>

      <Text style={styles.numberText}>{guessedNumber}</Text>
      <PrimaryButton onPress={onPlus} style={styles.button}>
        <FontAwesome name="plus" />
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  numberText: {
    color: COLORS.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
  button: {
    width: 100,
  },
});
