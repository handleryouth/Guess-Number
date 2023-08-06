import React from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { COLORS } from "@src/color";

export interface InstructionProps {
  children: string;
  style?: StyleProp<TextStyle>;
}

export default function Instruction({ children, style }: InstructionProps) {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instruction: {
    color: COLORS.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
